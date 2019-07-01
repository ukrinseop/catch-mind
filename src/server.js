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

// #003. 아래 io까지 하고
// localhost:4000/socket.io/socket.io.js를 해보면 이상한 페이지가뜸
const io = socketIO(server);

// 매 연결할때마다 소켓의 id를 push할거임
let sockets = [];

// #004. 이거하고 localhost 가봐도 별거 없음, 클라이언트로 가서 뭔가해줘야함 -> home.pug로 이동
// socket이라는 인자는 연결된 것에 대한 정보를 얻을 수 있음
// 서버를 잠시 껐다가 다시 키면 아까 연결해둔 3개의 클라이언트에 대해 자동으로 다시 연결됨
// 그래서 sombody connected가 3개가 뜸
// 그 이유는 아까 크롬창에서 실행한 io("/")이 항상 server의 이벤트를 듣고 있기 때문

// io.on("connection", socket => console.log("Somebody Connected"));
// io.on("connection", socket => console.log(socket));
io.on("connection", socket => {
  sockets.push(socket.id);
});

// 이렇게 하면 sockets[] 배열 전체가 3번출력되는데 왜그러지??
setInterval(() => console.log(sockets), 1000);

// 위에까지 하고 브라우저에서 일일이 io("/")를 하지 않기위해 index.js로 감
