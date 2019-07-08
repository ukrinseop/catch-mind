window.load = loadJQueryFile();
var heads = document.getElementsByTagName("head");

function loadJQueryFile() {
  var jqueryScript = document.createElement("script");
  //   jqueryScript.setAttribute("type", "text/javascript");
  //   jqueryScript.setAttribute("src", "/js/jquery.min.js");
  jqueryScript.setAttribute(
    "src",
    "https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"
  );

  //   jqueryScript.onreadystatechange = handler;
  //   jqueryScript.onload = handler;
  //   heads[0].appendChild(jqueryScript);
  $(document).ready(function() {
    $("form").submit(function() {
      let datas = $("form").serialize();
      alert("datas" + datas);
      return false;
    });
  });
}

// function handler() {
//   var myScriptFile = document.createElement("script");
//   myScriptFile.setAttribute("type", "text/javascript");
//   myScriptFile.setAttribute("src", "myscript.js");
//   heads[0].appendChild(myScriptFile);
// }

// $(document).ready(function() {
//   $("form").submit(function() {
//     let datas = $("form").serialize();
//     alert("datas" + datas);
//     return false;
//   });
// });

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
