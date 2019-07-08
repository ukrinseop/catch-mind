$(document).ready(function() {
  $("#iform").submit(function() {
    let datas = $("form").serialize();
    console.log("datas : " + datas);
    alert(datas);
    return false;
  });

  $("#toggle").click(function() {
    divToggle();
  });
});

function getValue() {
  let name = $("#txtID").val();
  if (name == "") alert("아이디입력하시오");
  else alert(name);
}
function getText() {
  //   $("#getText").text("바뀌었나?"); // 버튼누르면 값 바뀜
  let text = $("#getText").text(); // 값을 가져옴(태그가 있다면 태그는 빼고 text만 가져옴)
  //   let html = $("#getText").html(); // 태그도 가져옴
  alert(text);
  //   alert(html);
}

function divToggle() {
  // 뭔가이상함
  $("#toggleDiv").toggle(
    function() {
      $(this).addClass("on");
    },
    function() {
      $(this).addClass("off");
    }
  );
}
