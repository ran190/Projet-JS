# Projet-JS

This code is a shell program that allows users to run various commands, manage processes, and list the currently running processes. 

The code uses the inquirer, child_process, and readline libraries. The following functionality is implemented:

- Exiting shell with 'CTRL-P'
- Listing of all running processes with the 'lp' command
- Stopping, killing, or continuing a process with the 'bing [-k|-p|-c] <processId>' command
- Running a program or shell command with path (in single quotes)
- Detaching a process with the 'keep <PID>' command
- Running a command in the background by ending it with an exclamation mark (!).

The code runs in an infinite loop and repeatedly prompts the user to enter a command, which is then executed and the output is displayed on the console.

To start to use this program, need to do the following steps:

- Download the three files and put them in the same directory

- Start by running "npm install prompt" in the root directory

- To run the CLI : ype "node shell.js" 
