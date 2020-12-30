  document.getElementById("form-button").onclick = function() {
    var answer = document.getElementById("form-answer");
    if (answer == "かいせいぶんかさい") {
      var result = window.confirm("あなたは正解しました。");
      if (result) {
        window.open('index.html', '_blank');
      }
    }else if (answer == "でこれーしょん") {
      window.open('https://www.youtube.com', '_blank');
    }else {
      alert("不正解");
    };
}
