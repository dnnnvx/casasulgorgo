{
  description = "casasulgorgo - SvelteKit landing page";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";

  outputs =
    { nixpkgs, ... }:
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
      devShells = forAllSystems (pkgs: {
        # Biome, TypeScript & co. come from package.json so versions stay in sync with CI/Docker
        default = pkgs.mkShellNoCC {
          packages = [ pkgs.nodejs_26 ];

          shellHook = ''
            export PATH="$PWD/node_modules/.bin:$PATH"
          '';
        };
      });

      formatter = forAllSystems (pkgs: pkgs.nixfmt);
    };
}
