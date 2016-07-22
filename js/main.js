//define computer answers
//rondomize computer answers
//function - onclick deliver randomized answer
//functino - deliver computer answers in answer feild and history feild//

var wisdoms = ["Ofcourse!", "That's a terrible thought", "yes", "no", "maybe?", "It is decidedly so", "It doesn't matter, you're awesome", "Just take it slow", "Keep is drama free", "How could you even ask that?", "Ask me later", "Can you rephrase that?", "I wouldn't get your hopes up"];


function response() {
  var userAnswer = document.getElementById("userAnswer");
  var history = document.getElementById("history");
  var input = document.getElementById("input");
  var computerAnswer = wisdoms[Math.floor(Math.random()* wisdoms.length)];

  if (input !== "") {
    userAnswer.innerHTML = computerAnswer;

  }
}
