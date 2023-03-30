const { Server } = require("socket.io")
const { createServer } = require("http")
const { spawn } = require('child_process');

const httpServer = createServer();
//const io = new Server(port);
const io = new Server(httpServer, {
    cors: {
      origin: "http://192.168.178.58:3000"
    }
});

httpServer.listen(3030);

io.on("connection", (socket) => {
    console.log("device connected")
    
    socket.on("moveForward", (arg) => {
        console.log("move forward received");

        //run python script
        const pythonProcess = spawn('python', ['../testScript.py'])
    })
})