//创建客户端

const net = require('net');
const client = net.connect({port: 3000}, () => {
  // 'connect' listener
  console.log('客户端 connected to server!');
  client.write('world!\r\n');
});
client.on('data', (data) => {
  console.log(data.toString());
  //client.end();
});
client.on('end', () => {
  console.log('disconnected from server');
});



