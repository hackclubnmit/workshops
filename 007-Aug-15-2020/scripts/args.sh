#!/bin/bash

# $1,$2,$3 are all args you can give to a shell script
# For eg: args one two

echo "First Arg: $1"
echo "Second Arg: $2"

# $# is the number of args
# $0 is the name of the file
# $@ is all the arguments given
echo "All $# args of $0: $@"

echo test
# $_ takes argument from last class
echo "Previous arg of echo: $_"

# $? gives error code of last command
false || echo nice
echo "Error Code: $?"

false && echo nice
echo "Error Code: $?"

