#!/bin/bash

# This script runs `yarn next` with the arguments passed to it

# Check if any arguments were passed
if [ "$#" -eq 0 ]; then
    echo "No arguments supplied. Running 'yarn next' without arguments."
    yarn next
else
    echo "Running 'yarn next $@'"
    yarn next "$@"
fi
