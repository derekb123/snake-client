const net = require('net');

const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541

    
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {conn.write("Move: up");
    console.log(data);
  }); 
  conn.on('connect',() => {
    console.log("Successfully connected to game server");
    conn.write("Name: BUT");
    // conn.write("Move: up");
    // setInterval( () =>    {
    //   conn.write("Move: right");
    // }, 
    //   50);
 

  });
 


  return conn;
}

module.exports = {
  connect
};