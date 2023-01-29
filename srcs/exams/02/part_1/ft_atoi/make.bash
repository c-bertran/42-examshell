#!/bin/bash
set -e

clang -Wall -Werror -Wextra ft_atoi.c main.c -o ftAtoi;
./ftAtoi "hello world" > real
./ftAtoi "" >> real
./ftAtoi "    " >> real
./ftAtoi 16-789 >> real
./ftAtoi +4096 >> real
./ftAtoi 8 >> real
./ftAtoi 16 >> real
./ftAtoi 128 >> real
./ftAtoi 1024 >> real
./ftAtoi 16384 >> real
./ftAtoi 131072 >> real
./ftAtoi 1048576 >> real
./ftAtoi -1048576 >> real
./ftAtoi -131072 >> real
./ftAtoi -16384 >> real
./ftAtoi -1024 >> real
./ftAtoi -128 >> real
./ftAtoi -16 >> real
./ftAtoi -8 >> real

clang -Wall -Werror -Wextra $1/ft_atoi/ft_atoi.c $1/ft_atoi/main.c -o ftAtoi2;
./ftAtoi2 "hello world" > real
./ftAtoi2 "" >> real
./ftAtoi2 "    " >> real
./ftAtoi2 16-789 >> real
./ftAtoi2 +4096 >> real
./ftAtoi2 8 >> real
./ftAtoi2 16 >> real
./ftAtoi2 128 >> real
./ftAtoi2 1024 >> real
./ftAtoi2 16384 >> real
./ftAtoi2 131072 >> real
./ftAtoi2 1048576 >> real
./ftAtoi2 -1048576 >> real
./ftAtoi2 -131072 >> real
./ftAtoi2 -16384 >> real
./ftAtoi2 -1024 >> real
./ftAtoi2 -128 >> real
./ftAtoi2 -16 >> real
./ftAtoi2 -8 >> real

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash ftAtoi2

rm -rf ftAtoi ftAtoi2 real fake
