const http = require("http");
const { Server } = require("socket.io");

// Create a basic HTTP server
const server = http.createServer();

// Create a new instance of Socket.IO attached to the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle messages from clients
  socket.on("asdf", (message) => {
    console.log("Received message:", message);
    // Broadcast the message to all connected clients
    io.emit("asdf", message);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
