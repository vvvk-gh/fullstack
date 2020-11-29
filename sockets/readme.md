# Install Depencies 

```shell

sudo npm i express 
sudo npm i socket.io

```
# Intial Setup

```javascript

const http = require('http');
const express = require('express'); 
const app = express()

const socketio = require('socket.io');
const server = http.createServer(app);            #sockets work on top of http
const io =  socketio(server);

app.use('/' , express.static(__dirname + "/public"));

server.listen(3434 , ()=> console.log('server running at http://localhost:3434'));

```

# Verification 

Follow the steps below 
 - Open user-agent (Browser)
 - Open [socket.js in localhost](http://localhost:3434/socket.io/socket.io.js)
 - You should see some js file then the socket.io intial setup is done
