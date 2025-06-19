const express=require('express');
const http=require('http');
const path=require('path');
const {Server} = require('socket.io');




const app=express();

app.use(express.static(path.join(__dirname,'../frontend')));
const server=http.createServer(app);


const io= new Server(server,{
    cors:'*'
});

io.on('connection',(socket)=>{
    console.log(`${socket.id} connected`);

    socket.on('chat msg',(msg)=>{
        io.emit('chat msg',msg);
    })
})

server.listen(3500,()=>{
    console.log('listening to server');
})