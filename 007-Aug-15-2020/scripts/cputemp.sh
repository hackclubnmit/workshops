#!/bin/bash

## Install lm-sensors hdd-temp
# Run sudo sensors-detect

# change the sensor 'SBUSMASTER 0' to the sensor of your cpu/system
sensors | grep -i 'SMBUSMASTER 0' | cut -d ' ' -f 12
