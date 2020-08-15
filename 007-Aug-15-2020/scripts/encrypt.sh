#!/bin/bash

# Check if archive already exists
if [ -f "$1.7z" ]; then
	echo "Archive already exists";
	exit 1;
fi

# check if file or directory exists
if [[ -f "$1" || -d "$1" ]]; then
	echo "Encrypting folder $1"
	# Use pwgen utility to generate a strong secure password
	pass=$(pwgen -sc0 15 1)

	7z a -mhe=on -p"$pass" "$1".7z "$1"

	echo
	echo "---------------------------------"
	echo "Encrypted $1 as $1.7z"
	echo "Password: $pass"
	echo "Done."
	echo "---------------------------------"
else
	echo "File or Directory not found";
	exit 1;
fi
