# Projet-JS

## shell.js

This code is a shell program that allows users to run various commands, manage processes, and list the currently running processes. 

The code uses the inquirer, child_process, and readline libraries. The following functionality is implemented:

The valid commands :

_Ctrl+p_ : Exiting shell

_lp_ : Listing of all running processes

_bing [-k|-p|-c] <PID>_ : Stopping, killing, or continuing a process

_keep <PID>_ : Detaching a process
  
_<name_program> !_ : Run a command/program in the background

To run a program or shell command with path, make sure that the path is correct.

The code runs in an infinite loop and repeatedly prompts the user to enter a command, which is then executed and the output is displayed on the console.

### Launching this code

To start to use this program, you need to follow these steps:

* Download the  `package-lock.json`, `package.json` and `shell.js` files and put them in the same directory

* Run `npm install prompt` in the root directory to install the corresponding librairy

* To run the CLI : type `node shell.js`

## main.js

This code is another test of a shell program. It manages the modifications of the current file and print it on the terminal as well as other commands listed just below.

The valid commands :

_lp_ : Listing of all running processes

_cd_ : Change the current directory, to the previous one, a next one... (example : /mnt/c/../c/.. is correctly managed)

_bing [-k|-p|-c] <PID>_ : Stopping, killing, or continuing a process

_keep <PID>_ : Detaching a process with the 'keep <PID>' command (we're having some issues with this one as the processes don't stay in background as soon as we close the terminal which was launching them, but we managed to put them in background with the `nohup <command> &` command)

_<name_program> !_ : Run a command in the background

all the other bash/sh commands are also available and managed

The code is infinitly waiting for incomming data from the terminal (`process.stdin.on()`). This is causing issues to implement the Ctrl+P required command as the program isn't waiting for just one keyboard key to be pressed. If so, each key pressed will try to launch a command, which will be impossible to manage to read string from the terminal.

### Launching this code

To start to use this program, you need to follow these steps :

* download the `Main.js` file

* open a Linux terminal in the repository of the downloaded file

* run `node main.js`

## Required configuration

Make sure to have the version 16 or latest of NodeJS. You can download the version 16 on Ubuntu with `curl -s https://deb.nodesource.com/setup_16.x | sudo bash` or `sudo apt install nodejs`

These codes need to be used in Linux.
