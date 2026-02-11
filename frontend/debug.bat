@echo off
echo Testing Node and NPM... > output.txt
node -v >> output.txt 2>&1
echo NPM version: >> output.txt
call npm -v >> output.txt 2>&1
echo Listing directory: >> output.txt
dir >> output.txt 2>&1
echo Node modules check: >> output.txt
dir node_modules >> output.txt 2>&1
