// eslint-disable-next-line no-undef
const socket = io("/");

function sendMessage(msg) {
  socket.emit("newMsg", { msg });
  console.log(`you : ${msg}`);
}

function setNickName(nickname) {
  socket.emit("setNickName", { nickname });
  console.log(`Nickname set : ${nickname}`);
}

function handleMessageNotif(data) {
  const { msg, nickname } = data;
  console.log(`${nickname} : ${msg}`);
}

socket.on("msgNotif", handleMessageNotif);

{
  /* <script type="text/javascript" src="<c:url value="/js/jquery-1.6.min.js"/>  */
}
