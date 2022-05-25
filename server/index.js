const express = require("express")
const socketio = require("socket.io")
const http = require("http");
const router = require("./router");
const cors = require('cors'); 
const users = require("./users.js");
const { use } = require("./router");




const PORT = process.env.PORT || 5000

const app = express();
app.use(cors()); 
const server = http.createServer(app)
const io = socketio(server);
io.on("connect", (socket)=> {
    socket.on("join", ({name, room}, callback)=> {
        const {error, user} = users.addUser({id :socket.id, name, room});

        if(error)   return callback(error)
        socket.emit("message", {user:"admin", text:`${user.name}, welcome to the room ${user.room}`})
        socket.broadcast.to(user.room).emit("message", {user:"admin", text:`${user.name}, has joined `})
        socket.join(user.room);
        io.to(user.room).emit("roomData", {room:user.room, users : users.getUsersInRoom(user.room) })

        callback();
    });
    socket.on("sendMessage", (message, callback) => {
        const user = users.getUser(socket.id);
        io.to(user.room).emit("message", {user:user.name, text: message});
        io.to(user.room).emit("roomData", {room:user.room,users : users.getUsersInRoom(user.room)});

        callback();
    })

    socket.on("disconnect", () => {
        const user = users.removeUser(socket.id);
        if(user){
            io.to(user.room).emit("message",  {user:"admin", text:`${user.name} has left`})
        }
    })
} )

app.use(router)

server.listen(PORT, () => console.log(`Server Has Started on port ${PORT} `));

