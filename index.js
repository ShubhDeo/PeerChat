const express = require('express');
const { Server } = require("socket.io")
const app = express();
const http = require('http');
const server = http.createServer(app)
const cors = require("cors");


const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST']
    },
    
});

app.use(cors());

io.on('connection', (socket) => { //when a user joins the connection.
    console.log(`User connected: ${socket.id}`);
    socket.emit('me', socket.id); //server to client 
    socket.on('disconnect', () => { //client to server
        socket.broadcast.emit('callended');
    })
    socket.on("calluser", ({userToCall, signalData, from, name}) => {
        io.to(userToCall).emit("calluser", {signal: signalData, from, name})
    })  
    socket.on("answercall", (data) => {
        io.to(data.to).emit("callaccepted", data.signal);
    })
})



app.get("/", (req, res) => {
    res.send("Server is running..")
})


const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
    console.log(`Server started on PORT ${PORT}`)
})


