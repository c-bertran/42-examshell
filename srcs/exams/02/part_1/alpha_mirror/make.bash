#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o alphaMirror;
./alphaMirror "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > real
./alphaMirror "cette phrase ne cache rien" >> real
./alphaMirror "               cette phrase ne cache rien" >> real
./alphaMirror "                       " >> real
./alphaMirror one two >> real
./alphaMirror >> real

clang -Wall -Werror -Wextra $1/alpha_mirror/alpha_mirror.c -o alphaMirror2;
./alphaMirror2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > fake
./alphaMirror2 "cette phrase ne cache rien" >> fake
./alphaMirror2 "               cette phrase ne cache rien" >> fake
./alphaMirror2 "                       " >> fake
./alphaMirror2 one two >> fake
./alphaMirror2 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash alphaMirror2

rm -rf alphaMirror alphaMirror2 real fake
