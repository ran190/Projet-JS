import inquirer from "inquirer";
import { exec, execSync, spawn } from 'child_process'
import * as readline from 'readline'

//Exit shell with 'CTRl-P'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.emitKeypressEvents(process.stdin)
process.stdin.setRawMode(true)
process.stdin.on('keypress', (str, key) => {
  if (key.ctrl === true && key.name === 'p') {
    console.log("Exiting shell!");
    process.exit();
  }
});

//Loop infinitely
while (true) {
  //Ask user for command
  await inquirer
    .prompt([
      {
        name: 'command',
        message: 'Enter command: ',
      },
    ])
    .then(answer => {
      const command = answer.command;
      const args = command.split(' ');
      let detachedProcesses = [];

      //Listing
      if (command === 'lp') {
        exec('ps a', (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          let lines = stdout.split('\n');
          console.log('Process ID\tCommand');
          for (let i = 1; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line !== '') {
              let parts = line.split(/\s+/);
              let pid = parts[0];
              let command = parts.slice(3).join(' ');
              console.log(`${i}\t\t${pid}\t${command}`);
            }
          }
        });
      }

      //Voir Option pour bing [-k|-p|-c] <processId>
      if (args.length > 0 && args[0] === 'bing') {
        const action = args[1];
        const PID = args[2];
        let output;
        switch (action) {
          case "-k":
            output = execSync('kill ' + PID);
            console.log('Process killed',);
            break;
          case "-p":
            console.log(PID)
            output = execSync('kill -STOP ' + PID); 
            console.log('Process stopped',);
            break;
          case "-c":
            output = execSync('kill -CONT ' + PID);
            console.log('Process continuing',);
            break;
          default:
            console.log("Invalid action. Use -k, -p, or -c.");
        }
      }

      //Path
      if (command.match('([^\']+)')){
        console.log(command);
        const program = spawn('bash',[command]);
  
        program.stdout.on('data', (data) => {
          console.log(` ${data}`);
        });
        
        program.stderr.on('data', (data) => {
          console.log(`error: ${data}`);
        });
        
        program.on('close', (code) => {
          console.log(`shell progress exited with code ${code}`);
        }); 
      }

      //Detaching 
      if (args.length > 0 && args[0] === 'keep') {
        const PID = args[1];
        exec(`nohup kill -s SIGHUP ${PID}`, (err) => {
          if (err) {
            console.error(`Error: ${err}`);
            return;
          }
          console.log(`Process ${PID} detached`);
        });
      }

      //Background
      let new_command;
      if (command.endsWith('!')) {
        new_command = command.slice(0, -1);
      }else {
        try {
          exec(command, { stdio: 'ignore' });
        }catch (err) {
          console.log("Please give right command")
        }
      }
      exec(`${new_command} &`, { detached: true }, (error, stdout, stderr) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
      });
 
    })
    .catch(err => console.error(err))
}

rl.close()