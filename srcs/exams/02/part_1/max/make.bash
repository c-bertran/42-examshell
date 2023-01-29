#!/bin/bash
set -e

clang -Wall -Werror -Wextra max.c main.c -o Max;
./Max 12 52 19 82 44 21 36 32 90 37 89 14 79 > real
./Max 8 -7 69 -50 28 34 -38 37 -47 >> real
./Max 15 -39 107 119 93 53 -36 81 131 69 -1 129 -52 74 47 -26 >> real
./Max 48 110 60 18 -29 74 26 -62 -7 36 90 -64 35 126 91 24 -9 79 -32 37 -10 9 17 137 -56 14 11 46 64 -33 5 69 54 95 -31 -78 -81 -35 122 -85 -57 -73 87 -21 101 130 98 112 107 >> real

clang -Wall -Werror -Wextra $1/max/max.c $1/max/main.c -o Max2;
./Max2 12 52 19 82 44 21 36 32 90 37 89 14 79 > fake
./Max2 8 -7 69 -50 28 34 -38 37 -47 >> fake
./Max2 15 -39 107 119 93 53 -36 81 131 69 -1 129 -52 74 47 -26 >> fake
./Max2 48 110 60 18 -29 74 26 -62 -7 36 90 -64 35 126 91 24 -9 79 -32 37 -10 9 17 137 -56 14 11 46 64 -33 5 69 54 95 -31 -78 -81 -35 122 -85 -57 -73 87 -21 101 130 98 112 107 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash Max2

rm -rf Max Max2 real fake
