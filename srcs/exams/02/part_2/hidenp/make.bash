#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o hidenp;
./hidenp > real
./hidenp one >> real
./hidenp one two three >> real
./hidenp "fgex.;" "tyf34gdgf;'ektufjhgdgex.;.;rtjynur6" >> real
./hidenp "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" "etyi" >> real
./hidenp "               cette phrase ne cache rien" "   ce" >> real

clang -Wall -Werror -Wextra $1/hidenp/hidenp.c -o hidenp2;
./hidenp2 > fake
./hidenp2 one >> fake
./hidenp2 one two three >> real
./hidenp2 "fgex.;" "tyf34gdgf;'ektufjhgdgex.;.;rtjynur6" >> fake
./hidenp2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" "etyi" >> fake
./hidenp2 "               cette phrase ne cache rien" "   ce"  >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash hidenp2

rm -rf hidenp hidenp2 real fake
