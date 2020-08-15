#! /bin/bash
clear
res=0
iter="y"

while [ $iter = "y" ]; do
	echo "Enter first number"
	read -r num1
	echo "Enter second number"
	read -r num2
	# while [ $iter = "y" ]; do
	echo "1. Addition"
	echo "2. Subtraction"
	echo "3. Multiplication"
	echo "4. Division"
	echo "Enter your choice"
	read -r ch
	case $ch in
	1)
		res=$(($num1 + $num2))
		echo "Sum = "$res
		;;
	2)
		res=$(($num1 - $num2))
		echo "Sub = "$res
		;;
	3)
		res=$(($num1 * $num2))
		echo "Mul = "$res
		;;
	4)
		res=$(($num1 / $num2))
		echo "Div = "$res
		;;
	*) echo "Invalid choice" ;;
	esac
	echo "Do u want to continue (y/n)) ?"
	read -r iter
	if [ "$iter" != "y" ]; then
		exit
	fi
done
