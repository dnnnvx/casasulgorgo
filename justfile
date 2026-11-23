# List recipes
default:
    @just --list

# Builds on the linux-builder: aarch64 there, x86_64 in CI, but the same nixpkgs and patches,
# so the same findings. An empty vulnix.toml still makes CI fail on any CVE.
# CVE check of the image's runtime closure, as CI runs it (infra nix-build task)
vulnix system="aarch64-linux":
    #!/usr/bin/env bash
    set -euo pipefail
    out="$(nix build --no-link --print-out-paths .#packages.{{ system }}.image)"
    nix run --inputs-from . nixpkgs#vulnix -- --closure --whitelist vulnix.toml "$out"
