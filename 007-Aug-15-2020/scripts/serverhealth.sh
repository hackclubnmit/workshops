#!/bin/bash

# Fancy Colors support
export txtrst=$(tput sgr0)
export bldgrn=${txtbld}$(tput setaf 2)

echo "--------------------"
echo "${bldgrn}Date:${txtrst}";
date
echo ""
echo "--------------------"
echo "${bldgrn}Uptime:${txtrst}"
uptime
echo ""
echo "--------------------"
echo "${bldgrn}Currently connected:${txtrst}"
w
echo ""
echo "--------------------"
echo "${bldgrn}Last logins:${txtrst}"
last -a | head -3
echo ""
echo "--------------------"
echo "${bldgrn}Disk and memory usage:${txtrst}"
df -h | xargs | awk '{print "Free/total disk: " $11 " / " $9}'
free -m | xargs | awk '{print "Free/total memory: " $17 " / " $8 " MB"}'
echo ""
echo "--------------------"
echo "${bldgrn}Utilization and most expensive processes:${txtrst}"
top -b | head -3
echo
top -b | head -10 | tail -4
echo ""
echo "--------------------"
echo "${bldgrn}Open TCP ports:${txtrst}"
nmap -p 1000 -T4 127.0.0.1
echo ""
echo "--------------------"
echo "${bldgrn}Current connections:${txtrst}"
ss -s
echo ""
echo "--------------------"
echo "${bldgrn}processes:${txtrst}"
ps auxf --width=200
echo ""
echo "--------------------"
echo "${bldgrn}vmstat:${txtrst}"
vmstat 1 5
echo ""
echo "--------------------"
