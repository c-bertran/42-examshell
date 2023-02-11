#!/bin/bash

clang -Wall -Werror -Wextra main.c -o roString || exit 100
./roString "paqe      fwtdjetyi    ytjn    eytjoeyjne jeyj" > real
./roString "cette phrase ne cache rien" >> real
./roString "cette phrase!  !  ne! ca   c he rien" >> real
./roString "" >> real
./roString >> real
./roString one two >> real

clang -Wall -Werror -Wextra $1/rostring/rostring.c -o roString2
./roString2 "paqe      fwtdjetyi    ytjn    eytjoeyjne jeyj" > real
./roString2 "cette phrase ne cache rien" >> real
./roString2 "cette phrase!  !  ne! ca   c he rien" >> real
./roString2 "" >> real
./roString2 >> real
./roString2 one two >> real

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash roString2 0 "cette phrase!  !  ne! ca   c he rien" > /dev/null 2>&1

rm -rf roString roString2 real fake
