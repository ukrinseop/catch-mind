import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 5000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(logger("dev")); // morgan임
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));
app.get("/ajax", (req, res) => res.render("ajax"));
const handleListening = () => {
  console.log(`★★★ Server is Running : http://localhost:${PORT} ★★★`);
};
const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", socket => {
  socket.on("newMsg", ({ msg }) => {
    socket.broadcast.emit("msgNotif", {
      msg,
      nickname: socket.nickname || "Anon"
    });
  });
  socket.on("setNickName", ({ nickname }) => {
    socket.nickname = nickname;
  });
});
