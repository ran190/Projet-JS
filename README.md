# Projet-JS

## shell.js

This code is a shell program that allows users to run various commands, manage processes, and list the currently running processes. 

The code uses the inquirer, child_process, and readline libraries. The following functionality is implemented:

The valid commands :

Ctrl+p : Exiting shell

lp : Listing of all running processes

bing [-k|-p|-c] <PID> : Stopping, killing, or continuing a process

keep <PID> : Detaching a process

To run a program or shell command with path, make sure that the path is correct.

To run a command in the background, make sure to add an exclamation mark (!) at the end of the command

The code runs in an infinite loop and repeatedly prompts the user to enter a command, which is then executed and the output is displayed on the console.

### Launching this code

To start to use this program, you need to follow these steps:

- Download the  `package-lock.json`, `package.json` and `shell.js` and put them in the same directory

- Start by running `npm install prompt` in the root directory

- To run the CLI : type `node shell.js`

## main.js

This code is another test of a shell program. It manages the modifications of the current file and print it on the terminal as well as other commands listed just below.

The valid commands :

lp : Listing of all running processes

cd : Change the current directory, to the previous one, a next one... (example : /mnt/c/../c/.. is correctly managed)

bing [-k|-p|-c] <PID> : Stopping, killing, or continuing a process

keep <PID> : Detaching a process with the 'keep <PID>' command (we're having some issues with this one as the processes don't stay in background as soon as we close the terminal which was launching them, but we managed to put them in background with the `nohup <command> &` command)

<name_program> ! : Run a command in the background

all the other bash/sh commands are also available and managed

The code is infinitly waiting for incomming data from the terminal.

### Launching this code

To start to use this program, you just need to run `node main.js` in a Linux terminal opened in the repository where you've download this file.

## Required configuration

Make sure to have the version 16 or latest of node JS. You can download the version 16 on Ubuntu with `curl -s https://deb.nodesource.com/setup_16.x | sudo bash` or `sudo apt install nodejs`

These codes need to be used in Linux.
