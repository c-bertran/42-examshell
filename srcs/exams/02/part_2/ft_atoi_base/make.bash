#!/bin/bash
set -e

clang -Wall -Werror -Wextra ft_atoi_base.c main.c -o atoiBase;
./atoiBase > real
./atoiBase one two >> real
./atoiBase 42 >> real
./atoiBase "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" 8 >> real
./atoiBase "cette phrase ne cache rien              " 16 >> real
./atoiBase "       paqe fwtdjetyi	ytjn 			ytjoeyjne 		 jeyj" 10 >> real
./atoiBase "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" 2 >> real
./atoiBase "cette phrase ne cache rien              " 6 >> real
./atoiBase "       paqe fwtdjetyi	ytjn 			ytjoeyjne 		 jeyj" 13 >> real

clang -Wall -Werror -Wextra $1/ft_atoi_base/ft_atoi_base.c $1/ft_atoi_base/main.c -o atoiBase2;
./atoiBase2 > fake
./atoiBase2 one two >> fake
./atoiBase2 42 >> fake
./atoiBase2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" 8 >> fake
./atoiBase2 "cette phrase ne cache rien              " 16 >> fake
./atoiBase2 "       paqe fwtdjetyi	ytjn 			ytjoeyjne 		 jeyj" 10 >> fake
./atoiBase2 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" 2 >> fake
./atoiBase2 "cette phrase ne cache rien              " 6 >> fake
./atoiBase2 "       paqe fwtdjetyi	ytjn 			ytjoeyjne 		 jeyj" 13 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash atoiBase2 0 "paqe fwtdjetyi   ytjn    eytjoeyjne  jeyj" 2 >/dev/null 2>&1

rm -rf atoiBase atoiBase2 real fake
