const express = require(`express`);
const app = express();
// const session = require(`express-session`);
// firebase authentication?
const http = require("http");
const socketIo = require("socket.io");
const routes = require("./routes");
const index = require("./routes/socket");


const db = require('./models');

const PORT = process.env.PORT || 3001;

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


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);


// Start the API server
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
