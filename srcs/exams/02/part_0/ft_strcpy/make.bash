#!/bin/bash
set -e

clang -Wall -Werror -Wextra ft_strcpy.c main.c -o ft_strcpy;
./ft_strcpy "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > real
./ft_strcpy "cette phrase ne cache rien" >> real
./ft_strcpy "               cette phrase ne cache rien" >> real
./ft_strcpy "                       " >> real

clang -Wall -Werror -Wextra $1/ft_strcpy/ft_strcpy.c $1/ft_strcpy/main.c -o ft_strcpy2;
./ft_strcpy2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" > fake
./ft_strcpy2 "cette phrase ne cache rien" >> fake
./ft_strcpy2 "               cette phrase ne cache rien" >> fake
./ft_strcpy2 "                       " >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash ft_strcpy2

rm -rf ft_strcpy ft_strcpy2 real fake
