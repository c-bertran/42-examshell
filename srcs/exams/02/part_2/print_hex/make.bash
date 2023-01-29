#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o printHex;
./printHex > real
./printHex 1 2 >> real
./printHex 12 >> real
./printHex 745 >> real
./printHex 54245 >> real

clang -Wall -Werror -Wextra $1/print_hex/print_hex.c -o printHex2;
./printHex2 > fake
./printHex2 1 2 > fake
./printHex2 12 >> fake
./printHex2 745 >> fake
./printHex2 54245 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash printHex2

rm -rf printHex printHex2 real fake
