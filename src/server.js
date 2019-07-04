import { join } from "path";
import express from "express";
import socketIO from "socket.io";
import logger from "morgan";

// #001. 포트와 express 세팅
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

app.use(logger("dev")); // morgan임

// #002. src/static/index.js를 넣고 아래 static을 설정해주면
// url에 index.js를 넣으면 그 내용이 보임
// front-end에 관련된 파일을 다 넣을거임
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`★★★ Server is Running : http://localhost:${PORT} ★★★`);
};

const server = app.listen(PORT, handleListening);

const io = socketIO(server); // web-socket프로토콜, http서버 위에 올림

// 이벤트 2개 만들거임
// 1. 유저가 메시지를 보내는 이벤트
// 2. 다른 유저가 join하는 이벤트

// 벡엔드에서 프론트로 이벤트를 보낼거임 server.js가 서버, index.js가 클라이언트.
io.on("connection", socket => {
  // 클라이언트가 연결되면 connection이라는 이벤트를 발생시킴
  socket.emit("helloooo"); // 소켓이연결되면 helloooo이벤트를 발생시킴
  // 이벤트를 발생시킴, 서버는 이벤트를 발생시키고, 클라이언트는 이벤트를 리스닝함
  // emit("이벤트이름");
});
