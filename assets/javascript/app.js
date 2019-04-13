$(function () {

  var number = 5;
  var intervalId;
  var correct = 0;
  var incorrect = 0;
  // var unanswered = 0;
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
    },
    {
      question: "How old am I?",
      choices: ["21", "28", "30", "26"],
      answer: "28"
    }
  ];
  //SHOW MAIN PAGE BEFORE CLICK
  $("#doneBut").hide();

  function startGame() {
    $("#startBut").hide();
    $("#showTimer").append();
    $("#doneBut").show();
    timer();
    console.log("Game has started");
    showQuestions();
  }

  function endGame() {
    $("#showTimer").hide();
    $("#doneBut").hide();
    $("#mainQs").hide();
    stop();
    console.log("times up");
    function stop() {
      clearInterval(intervalId);
    }


  }

  // start game on click
  $("#startBut").on("click", function () {
    startGame();
  });

  //end game on click
  $("#doneBut").on("click", function () {
    endGame();
  });

  function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#showTimer").html("<h1>Time remianing: " + number + "</h1>");
    if (number === 0) {
      endGame();
    }
  }

  function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
      $("#mainQs").append('<div id="question">' + questions[i].question + '</div>')

      for (var j = 0; j < questions[i].choices.length; j++) {
        $("#mainQs").append('<div id="choices"><input type="radio">' + questions[i].choices[j] + '</input></div>');


      }

      // var answer1 = question[i].answer;
      // var answer2 = question[i].answer;
      // var answer3 = question[i].answer;

      
    }
    console.log(questions);
  }








  // $("#mainQs").append("<input type="radio"  value="answer" id="myRadio"></input>");


  // for (var i = 0; i < questions.length; i++) {

  // }
  // var response = (questions[i]);
  // question = $("mainQ").append(questions[i]);
  // if (response == questions[i].answer) {
  //   correct++;
  //   console.log("Correct!");
  // }
  //   else if (response !== questions[i].answer) {
  //     incorrect++;
  //     console.log("Wrong!");
  //   }
  //   else if (respone == "") {

  //     unanswered++;

  //     console.log("blank");
  //   }
  // }

  // }
});
