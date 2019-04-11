// $(function () {

//Timer
var number = 5;
var intervalId;

function startGame() {

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
      $("#quiz").text("ALL DONE!! Correct Answers: " + correct + " Incorrect Answers: " + incorrect + " Unanswered: " + unanswered);
    }
  }

  function stop() {
    clearInterval(intervalId);
  }

  run();

   var questions = [
    {
      question: "What is my favorite color?",
      choices: ["Red", "Yellow", "Green", "Blue"],
      answer: "Yellow"
    },
    {
      question: "How many cats do I have?",
      choices: ["3", "1", "2", "5"],
      answer: "2"
    },
    {
      question: "What color are my eyes?",
      choices: ["Hazel", "Brown", "Green", "Blue"],
      answer: "Hazel"
    }
  ]

  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;

  for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    // var response = $("mainQs").append(questions[i]);
    if (response == questions[i].answer) {
      correct++;
      console.log("Correct!");
    }
    else if (response !== questions[i].answer) {
      incorrect++;
      console.log("Wrong!");
    }
    else if (respone == "") {

      unanswered++;

      console.log("blank");
    }
  }
  function doneBut() {
    $("#quiz").text("ALL DONE!! Correct Answers: " + correct + " Incorrect Answers: " + incorrect + " Unanswered: " + unanswered);
    stop();
  } 

}




// var wrapper = $('#quiz'), container;
// for (var question in questions) {
//   container = $('<div id="quiz1" class="container"></div>');
//   wrapper.append(container);
//   container.append('<div class="item">' + question + '</div>');
//   container.append('<div class="category">' + questions[question].question + '</div>');

// }



// function myFunction() {
//   document.getElementById("myDIV").style.display = "none";
// }