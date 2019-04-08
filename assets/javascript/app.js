// $(function () {

//Timer
var number = 7;
var intervalId;



function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;

  $("#showNumber").html("<h1>Time remianing: " + number + "</h1>");

  if (number === 0) {
    stop();
    // alert("Time Up!");
    console.log("times up");
    $("#form").text("Time's up!!!");
  }
}



function stop() {
  clearInterval(intervalId);
}

run();

var answer = new Array(3);
answer[0] = "Paris"
answer[1] = "Four"
answer[2] = "eight"
function test(form) {
  for (j = 0; j < 3; j++) {
    currQuestion = j * 3;
    for (i = 0; i < 3; i++) {
      if (form.elements[i+currQuestion].checked) {
        if (form.elements[i+currQuestion].value == answer[j]) {
          alert("correct");
          stop();
          break;
        }
        else {
          alert("incorrect");
          stop();
        }
      }
    }
  }
}
