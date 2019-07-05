import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";
import { Socket } from "dgram";

const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"))

const handleListening = () => {
  console.log(`SERVER IS RUNNING : http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", Socket => {
  socket.on("newMessage", ({ message }) => {
    socket.broadcast.emit("messageNotif", {
      message,
      nickname: socket.nickname || "Anon"
    })
  })
})

socket.on("setNickname", ({ nickname }) => {
  socket.nickname = nickname;
})