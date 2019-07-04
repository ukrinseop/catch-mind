// eslint-disable-next-line no-undef
const socket = io("/");

// 서버에서 발생시킨 이벤트이름
socket.on("fuckyou", () => console.log("Somebody said Hello"));
