{
  description = "A flake for managing exercicios-2023 project";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }: 
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
        nodejs = pkgs.nodejs_20;
        nodePackages = import ./ts/default.nix { inherit pkgs system nodejs; };
      in
      {
        packages = {
        };

        devShells = rec { 
          default = ts;
          ts = nodePackages.shell.override {
            buildInputs = [
              pkgs.nodePackages."@angular/cli"
              pkgs.cypress
              pkgs.nodePackages.vscode-langservers-extracted
            ];
            configurePhase = ''
              export CYPRESS_INSTALL_BINARY=0
              export CYPRESS_RUN_BINARY=${pkgs.cypress}/bin/Cypress
            '';
            shellHook = ''
              export CYPRESS_INSTALL_BINARY=0
              export CYPRESS_RUN_BINARY=${pkgs.cypress}/bin/Cypress
              cs ts
            '';

          };
          phpex = pkgs.mkShell {
            buildInputs = with pkgs; [ php81 ] ++ (with pkgs.php81Packages; [composer]);
            shellHook = ''
              cd php
            '';
          };
        };
      }
    );
}
