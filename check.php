<?php
echo(
  document.getElementById("form-button").onclick = function() {
  var answer = document.getElementById("form-answer").value;
  if (answer == 30) {
    var result = window.confirm("あなたは正解しました。\nステージ2に進みますか？");
    if (result) {
      window.open('https://www.youtube.com', '_blank')
    }
  }else {
    alert("不正解");
  };
}
)
?>
