const net=require("net");

// 用于存储所有的连接
var clients = [];

const server = net.createServer((socket) => {
    
    clients.push(socket);               //这里clients存进去的是每个client的socket
    console.log(`Welcome ${socket.remoteAddress} to 2080 chatroom`);
    //console.log('client connected');
    
    //客户端传入消息会触发
    socket.on('data', (chunk) => {
        //socket.write(`${chunk}`);               //telnet默认是utf8
        // chunk：{"procotol":"boardcast","from":"张三","message":"弄啥咧！"}
        try{
            const signal=JSON.parse(chunk.toString().trim());
            const procotol = signal.procotol;
            switch (procotol) {
                case 'boardcast':
                    boardcast(signal);
                break;
                
                default:
                    socket.write('弄啥咧！你要干的我干不了');
                break;
            }
            
        }catch(error){
            socket.write('出错啦');
        }
        
    });
    
    function boardcast(signal) {
        console.log(signal);
        const name=signal.from;
        const msg=signal.message;
        
        const send={
            procotol: signal.procotol,
            from: name,
            message: msg
        }
        
        clients.forEach((client)=>{
            client.write(JSON.stringify(send));
        })
    }
    
    socket.on('end', () => {
        console.log('client disconnected');
    });
})

server.listen(3000, () => {
  console.log('server bound');
});




