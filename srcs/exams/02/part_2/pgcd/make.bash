#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o pgcd;
./pgcd 1 2 > real
./pgcd 5 12 >> real
./pgcd 42 745 >> real
./pgcd 7517 54245 >> real

clang -Wall -Werror -Wextra $1/pgcd/pgcd.c -o pgcd2;
./pgcd2 1 2 > fake
./pgcd2 5 12 >> fake
./pgcd2 42 745 >> fake
./pgcd2 7517 54245 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash pgcd2

rm -rf pgcd pgcd2 real fake
