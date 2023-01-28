#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o ulstr;
./ulstr > real
./ulstr "aBc" >> real
./ulstr "abc" "abc" >> real
./ulstr "PAGE" >> real
./ulstr "fwTDjEtYi" >> real
./ulstr "pAQe fwTDJetyi   YTJN    eyTjOEyJne  jEYj" >> real

clang -Wall -Werror -Wextra $1/ulstr/ulstr.c -o ulstr2;
./ulstr2 > fake
./ulstr2 "aBc" >> fake
./ulstr2 "abc" "abc" >> fake
./ulstr2 "PAGE" >> fake
./ulstr2 "fwTDjEtYi" >> fake
./ulstr2 "pAQe fwTDJetyi   YTJN    eyTjOEyJne  jEYj" >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash ulstr2

rm -rf ulstr ulstr2 real fake
