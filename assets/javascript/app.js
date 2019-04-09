// $(function () {

//Timer
var number = 5;
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
    $("#form").text("ALL DONE!! Correct Answers: 0 Incorrect Answers: 0 Unanswered: 0 ");
  }
}

function stop() {
  clearInterval(intervalId);
}

run();

function butClick() {
  $("#form").text("ALL DONE!! Correct Answers: 0 Incorrect Answers: 0 Unanswered: 0 ");
  stop();
}


// });