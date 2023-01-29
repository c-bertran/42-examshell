#!/bin/bash
set -e

clang -Wall -Werror -Wextra main.c -o camelToSnake;
./camelToSnake "helloWorldAndPlip" > real
./camelToSnake "hello_world_and_coucou" >> real
./camelToSnake "WonderFulWorld" >> real
./camelToSnake "" >> real
./camelToSnake one two >> real
./camelToSnake >> real

clang -Wall -Werror -Wextra $1/camel_to_snake/camel_to_snake.c -o camelToSnake2;
./camelToSnake2 "helloWorldAndPlip" > fake
./camelToSnake2 "hello_world_and_coucou" >> fake
./camelToSnake2 "WonderFulWorld" >> fake
./camelToSnake2 "" >> fake
./camelToSnake2 one two >> fake
./camelToSnake2 >> fake

diff -y --suppress-common-lines real fake > __diff
bash leaks.bash camelToSnake2

rm -rf camelToSnake camelToSnake2 real fake
