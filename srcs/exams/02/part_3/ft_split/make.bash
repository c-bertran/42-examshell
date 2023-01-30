#!/bin/bash
set -e

clang -Wall -Werror -Wextra ft_split.c main.c -o ftSplit;
./ftSplit "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > real
./ftSplit "cette phrase ne cache rien" >> real
./ftSplit "               cette phrase ne cache rien" >> real
./ftSplit "                       " >> real
./ftSplit "cette phrase ne cache rien               " >> real

clang -Wall -Werror -Wextra $1/ft_split/ft_split.c $1/ft_split/main.c -o ftSplit2;
./ftSplit2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > fake
./ftSplit2 "cette phrase ne cache rien" >> fake
./ftSplit2 "               cette phrase ne cache rien" >> fake
./ftSplit2 "                       " >> fake
./ftSplit2 "cette phrase ne cache rien               " >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash ftSplit2

rm -rf ftSplit ftSplit2 real fake
