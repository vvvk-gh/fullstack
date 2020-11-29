let socket = io();

let btn = document.getElementById('btn');

btn.addEventListener('click' , ()=>{
    socket.emit('boom');
})

// socket.on('whizz' , ()=> {
//     let div = document.createElement('div');
//     div.innerText = 'whizz';
//     document.body.appendChild(div);
// })