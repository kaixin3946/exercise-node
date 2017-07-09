//创建客户端

const net = require('net');

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name?', (answer) => {
    const name=answer.trim();
    
    if (!name) {
        throw new Error('请输入真实姓名');
    }
    
    const client = net.connect({port: 3000,host:"10.107.33.60"}, () => {
        console.log(`${name} is come.`);
        
        //监听服务器输入的数据
        client.on('data', (data) => {
            try{
                const info=JSON.parse(data.toString().trim());
                const procotol=info.procotol;
                
                switch (procotol) {
                    case 'boardcast':
                        console.log('\nboardcast');
                        console.log(info.from + '>');
                        console.log(info.message);
                        rl.prompt();

                        break;
                    default:
                        client.write('弄啥咧！你要干的我干不了');
                        break;
                }
                
            }catch(error){
                server.write('弄啥咧！');
            }
            
        });
        
        rl.on('line', (line) => {
            //console.log()是写在当前命令框里
            //client.write()是写在socket发送到另一端-这里指服务端
            var send = {
                procotol: 'boardcast',
                from: name,
                message: line.toString().trim()
            };
            client.write(JSON.stringify(send));

            rl.prompt();
            //client.write(`${name}: ${line}`);
        });
    
    });
    
    client.on('end', () => {
        console.log('disconnected from server');
    });
});






// client.on('data', (data) => {
//   console.log(data.toString());
//   //client.end();
// });
