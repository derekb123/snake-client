const net = require('net');
let myconnection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }
};

const up = (key) => {
  if (key === 'w') {
    myconnection.write("Move: up");;
  }
}

const down = (key) => {
  if (key === 's') {
    myconnection.write("Move: down");
  }
}

const left = (key) => {
  if (key === 'a') {
    myconnection.write("Move: left");
  }
}

const right = (key) => {
  if (key === 'd') {
    myconnection.write("Move: right");
  }
}

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function(conn) {
  myconnection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  // stdin.on('data', (key) => {
  //   handleUserInput(key);
  // });

  stdin.on('data', handleUserInput);
  stdin.on('data', up);
  stdin.on('data', down);
  stdin.on('data', left);
  stdin.on('data', right);

  return stdin;
}

module.exports = {
  setupInput
}
