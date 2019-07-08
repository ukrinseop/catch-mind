import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev")); // morgan임
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));
const handleListening = () => {
  console.log(`★★★ Server is Running : http://localhost:${PORT} ★★★`);
};
const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", socket => {
  socket.on("dd", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "anonymous"
    });
  });

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
