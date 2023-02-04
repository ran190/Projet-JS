# Projet-JS

This code is a shell program that allows users to run various commands, manage processes, and list the currently running processes. 

The code uses the inquirer, child_process, and readline libraries. The following functionality is implemented:

The valid commands :

Ctrl+p : Exiting shell with 'CTRL-P'
lp : Listing of all running processes with the 'lp' command
bing [-k|-p|-c] <PID> : Stopping, killing, or continuing a process with the 'bing [-k|-p|-c] <PID>' command
keep <PID> : Detaching a process with the 'keep <PID>' command

To run a program or shell command with path, make sure that the path is in single quotes
To run a command in the background, make sure to add an exclamation mark (!) at the end of the command

The code runs in an infinite loop and repeatedly prompts the user to enter a command, which is then executed and the output is displayed on the console.

Make sure to have the version 16 or latest of node JS. You can download the version 16 on Ubuntu with 'curl -s https://deb.nodesource.com/setup_16.x | sudo bash'

This code need to be used in Linux.
  
To start to use this program, need to do the following steps:

- Download the three files and put them in the same directory

- Start by running "npm install prompt" in the root directory

- To run the CLI : type "node shell.js" 
