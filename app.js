const app = require("express")()
var http = require('http').Server(app);
var io = require('socket.io')(http);
var path = require("path")


app.get('/', (req, res) =>{
    res.sendFile(__dirname + "/index.html")
})

io.on("connection",(socket)=>{
    socket.on("message",(message)=>{
        io.emit("message",message)
    })
})

http.listen(3000,()=>{console.log("running")})