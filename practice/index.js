const socket = io("/");


function sendMessage(message) {
  socket.emit("newMessage", { message: message });
  console.log(`You : ${message}`);
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });

}

function handleMessageNotif(data) {
  const { message } = data;
  console.log(`${nickname} : ${message}`);
}



socket.on("messageNotif", handleMessageNotif);