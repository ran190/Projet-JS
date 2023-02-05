# Projet-JS

This code is a shell program in JavaScript that allows users to run various commands, manage processes, and list the currently running processes. 

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

## Required configuration

Make sure to have the version 16 or latest of NodeJS. You can download the version 16 on Ubuntu with `curl -s https://deb.nodesource.com/setup_16.x | sudo bash` or `sudo apt install nodejs`

This code need to be used in Linux.

Go take a look at this [page](https://github.com/Julie-mg/Projet-JS.git) if you want to see a test of a shell managing the bash cd command among other ones.
