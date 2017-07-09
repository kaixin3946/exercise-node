const net = require('net');
const iconv = require('iconv-lite');

//创建一个socket服务器
//可以在telnet上应用，有乱码

const server = net.createServer((socket) => {
  // 'connection' listener
  console.log('client connected');
  
  socket.on('data', (chunk) => {
    console.log(chunk.toString());
    const word=iconv.encode("你说啥?", 'gbk');
    socket.write(`server > ${word}`);               //telnet默认是utf8
  });
  
  socket.on('end', () => {
    console.log('client disconnected');
  });
  
  socket.write('hello\r\n');
  //socket.pipe(socket);
});
server.on('error', (err) => {
  throw err;
});
server.listen(3000, () => {
  console.log('server bound 启动');
});