import { join } from "path";
import express from "express";
import socketIO from "socket.io";

// #001. 포트와 express 세팅
const PORT = 4000;
const app = express();
app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));

// #002. src/static/index.js를 넣고 아래 static을 설정해주면
// url에 index.js를 넣으면 그 내용이 보임
// front-end에 관련된 파일을 다 넣을거임
app.use(express.static(join(__dirname, "static")));

app.get("/", (req, res) => res.render("home"));

const handleListening = () => {
  console.log(`★★★ Server is Running : http://localhost:${PORT} ★★★`);
};

app.listen(PORT, handleListening);
