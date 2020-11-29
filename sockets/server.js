const http = require('http');
const express = require('express');
const app = express()

const socketio = require('socket.io');
const server = http.createServer(app);
const io =  socketio(server);

io.on('connection' , (socket)=>{
    console.log('Client connected with client id  :' , socket.id);

    socket.on('boom' , ()=>{
        console.log('client with : '+socket.id+ '  boomed');
    })

    setInterval(() => {
        socket.emit('whizz')
    }, 2000);
})


app.use('/' , express.static(__dirname + "/public"));


server.listen(3434 , ()=> console.log('server running at http://localhost:3434'));