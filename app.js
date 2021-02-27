const express = require("express");
const http = require("http");
const socketIo = require("socket.io");



const port = process.env.PORT || 3001;
const index = require("./routes/socket");


const app = express();
app.use(index);


const server = http.createServer(app);
const io = socketIo(server); // < Interesting!
const getApiAndEmit = async socket => {
    try{
      socket.emit("FromAPI", res.data.currently.temperature); // Emitting a new message. It will be consumed by the client
    } catch (error) {
      console.error(`Error: ${error.code}`);
    }
  };

let interval;
io.on("connection", socket => {
 console.log("New client connected");
 if (interval) {
 clearInterval(interval);
 }
 interval = setInterval(() => getApiAndEmit(socket), 10000);
 socket.on("disconnect", () => {
 console.log("Packmember disconnected");
 });
});

server.listen(port, () => console.log(`Listening on port ${port}`));