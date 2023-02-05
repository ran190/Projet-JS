const { exec } = require('node:child_process');

let PATH_FOR_COMMAND = "/";

/* EVENT LISTENERS */
process.stdin.on('data', inputHandler);

process.stdout.write('Welcome to NodeShell. Press CTRL+D or CTRL+C to exit\n')
printPrompt()

function inputHandler(input) {
    executeCommand(input.toString().trim());
}

function executeCommand(commandStr) {
    if(!commandStr) {
        printPrompt();
        return;
    }

    commandArgs = commandStr.split(" ");
    command = commandArgs[0];
    args = commandArgs.splice(1);

    if(command == "cd") {
        changeDir(args[0]);
        printPrompt();
        return;
    }

    if(commandStr.slice(-1) == "!")
        commandStr.replace(/!$/, "&")

    if(command == "lp")
        commandStr = "ps";

    else if(command == "bing") {
        if(args.length < 2) {
            process.stderr.write("Address missing");
            printPrompt();
            return;
        }
        if(args[0] == '-k')
            commandStr = `kill ${args[1]}`;
        else if(args[0] == '-p')
            commandStr = `kill -STOP ${args[1]}`;
        else if(args[0] == '-c')
            commandStr = `kill -CONT ${args[1]}`;
    }

    else if(command == 'keep') {
        commandStr = `bash; nohup %${args[0]} &`;
    }

    else if(command == 'help') {
        console.log("The commands are :");
        console.log("cd : change current directory");
        console.log("lp : list of processus");
        console.log("bing [-k|-p|-c] <processId>: to kill, pause and resume a process");
        console.log("name_program + !: execute a process in background");
        console.log("keep + num PID : detach the corresponding process from the CLIi");
        console.log("Any bash command is also available\n");
        printPrompt();
        return;
    }

    exec(`cd ${PATH_FOR_COMMAND}; ${commandStr}`, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          printPrompt();
          return;
        }
        process.stdout.write(`${stdout}`);
        process.stderr.write(`${stderr}`);
        printPrompt();
      });
}

function changeDir(pathStr) {
    path_ = pathStr.split("/");
    firstHop = path_[0];

    if(!firstHop) {
        PATH_FOR_COMMAND = args[0];
        return;
    }

    for(let i = 0; i < path_.length; i++) {
        nextHop = path_[i]; 
        if(nextHop == ".") continue;
        else if(nextHop == "..") {
            actualPath = PATH_FOR_COMMAND.split("/");
            actualPath.pop();
            if(actualPath.length < 2)
                PATH_FOR_COMMAND = '/'
            else
                PATH_FOR_COMMAND = actualPath.join('/')
        }
        else {
            if(PATH_FOR_COMMAND != "/")
                PATH_FOR_COMMAND += `/${nextHop}`;
            else
                PATH_FOR_COMMAND += `${nextHop}`;
        }
    }
}

function printPrompt() {
    process.stdout.write(`${PATH_FOR_COMMAND} :-> `)
}