{
  description = "casasulgorgo - SvelteKit landing page";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    nix2container = {
      url = "github:nlewo/nix2container";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  outputs =
    {
      self,
      nixpkgs,
      nix2container,
      ...
    }:
    let
      systems = [
        "aarch64-darwin"
        "x86_64-darwin"
        "aarch64-linux"
        "x86_64-linux"
      ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      packages = forAllSystems (
        pkgs:
        let
          nodejs = pkgs.nodejs_26;
          # node embeds process.config (every dep's -dev include path), which drags bash, coreutils and
          # headers into the image (~300 MiB). Keep only what the ELF loads: rpath + interpreter.
          node = pkgs.runCommand "node" { nativeBuildInputs = [ pkgs.patchelf ]; } ''
            install -Dm755 ${pkgs.nodejs-slim_26}/bin/node $out/bin/node
            keep=$( (patchelf --print-rpath $out/bin/node | tr : '\n'; patchelf --print-interpreter $out/bin/node) \
              | grep -o '^/nix/store/[^/]*' | sort -u | sed 's/^/-e /')
            ${pkgs.nukeReferences}/bin/nuke-refs $keep $out/bin/node
          '';
          app = pkgs.buildNpmPackage {
            pname = "casasulgorgo";
            version = "0.0.1";
            inherit nodejs;
            # Same inputs as the Dockerfile context (.dockerignore), so doc edits don't rebuild
            src = pkgs.lib.fileset.toSource {
              root = ./.;
              fileset = pkgs.lib.fileset.unions [
                ./src
                ./static
                ./package.json
                ./package-lock.json
                ./vite.config.ts
                ./.npmrc
              ];
            };
            # Hashes come from package-lock.json, so lockfile bumps need no npmDepsHash update
            npmDeps = pkgs.importNpmLock { npmRoot = ./.; };
            npmConfigHook = pkgs.importNpmLock.npmConfigHook;
            # adapter-node bundles all devDependencies into build/, so no node_modules at runtime
            installPhase = ''
              runHook preInstall
              mkdir -p $out
              cp -r build $out/build
              echo '{"type":"module"}' > $out/build/package.json
              runHook postInstall
            '';
          };
        in
        {
          default = app;
        }
        // pkgs.lib.optionalAttrs pkgs.stdenv.hostPlatform.isLinux {
          inherit node;
          image = nix2container.packages.${pkgs.stdenv.hostPlatform.system}.nix2container.buildImage {
            name = "casasulgorgo";
            # Separate layers per store path (node, app), so zot dedupes node across images
            maxLayers = 100;
            config = {
              Entrypoint = [
                "${node}/bin/node"
                "${app}/build/index.js"
              ];
              Env = [
                "NODE_ENV=production"
                "PORT=3000"
              ];
              ExposedPorts."3000/tcp" = { };
              User = "65532:65532";
              # Commit date (git+file flake source); infra's release-image never moves a tag back to an older one
              Labels."ci.casasulgorgo.net/commit-timestamp" = toString self.lastModified;
            };
          };
        }
      );

      # Runs the image's trimmed node: catches nuke-refs stripping a path node needs at runtime
      checks = forAllSystems (
        pkgs:
        let
          p = self.packages.${pkgs.stdenv.hostPlatform.system};
        in
        pkgs.lib.optionalAttrs pkgs.stdenv.hostPlatform.isLinux {
          image = pkgs.runCommand "image-smoke" { nativeBuildInputs = [ pkgs.curl ]; } ''
            ${p.node}/bin/node -e '
              const assert = require("assert");
              assert.equal(new Intl.DateTimeFormat("it-IT", { month: "long" }).format(new Date(0)), "gennaio");
              assert.equal(require("crypto").createHash("sha256").update("x").digest("hex").slice(0, 8), "2d711642");
            '
            PORT=3999 ${p.node}/bin/node ${p.default}/build/index.js &
            curl -sf --retry 10 --retry-connrefused --retry-delay 1 -L -o /dev/null localhost:3999/
            kill %1
            touch $out
          '';
        }
      );

      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShellNoCC {
          packages = [
            pkgs.nodejs_26
          ];
          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
          '';
        };
      });

      formatter = forAllSystems (pkgs: pkgs.nixfmt);
    };
}
