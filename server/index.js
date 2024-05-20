const express=require("express")
const app = express()
const http=require("http")
const { Server } = require("socket.io")

const PORT = 4000

const server=http.createServer(app);
const io=new Server(server)


io.on("connection",(socket)=>{
    console.log("user connecté => "+socket.id)

    //socket.on("Event")

    socket.on("disconnect", ()=> {
        console.log("user deconnecté",socket.id)
    })
})
//localhost:4000//
app.get("/",(req,res)=> {
    res.send("<h1>Ca marche</h1>");
})

server.listen(PORT,()=>{
    console.log("server is running on port = "+PORT)
})