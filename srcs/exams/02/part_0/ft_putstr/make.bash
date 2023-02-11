#!/bin/bash

clang -Wall -Werror -Wextra ft_putstr.c main.c -o ft_putstr || exit 100
./ft_putstr > real

clang -Wall -Werror -Wextra $1/ft_putstr/ft_putstr.c main.c -o ft_putstr2;
./ft_putstr2 > fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash ft_putstr2 > /dev/null 2>&1

rm -rf ft_putstr ft_putstr2 real fake
