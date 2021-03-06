$(function () {

  var number = 60;
  var intervalId;
  var correct = 0;
  var incorrect = 0;
  var unanswered = 0;
  var correctAns;
  var userAns;
  var questions = [
    {
      question: "In what year did Germany invade Poland?",
      choices: ["1944", "1939", "1942", "1940"],
      answer: "1939"
    },
    {
      question: "What country was not part of the Axis Powers?",
      choices: ["Japan", "United States", "Italy", "Germany"],
      answer: "United States"
    },
    {
      question: "What research and development project produced the first nuclear weapons during World War II?",
      choices: ["Albert's Project", "Alan Parsons Project", "Manhattan Project", "Project Washington"],
      answer: "Manhattan Project"
    },
    {
      question: "What was the second city the United States dropped a nuclear bomb on?",
      choices: ["Yokohama", "Nagasaki", "Hiroshima", "Yoko Ono"],
      answer: "Nagasaki"
    }
    ,
    {
      question: "What English code breaker created a machine that helped to decrypt Nazi messages?",
      choices: ["Alan Turing", "Albert Einstein", "Charles Babbage", "Stephen Hawking"],
      answer: "Alan Turing"
    }
  ];


  //hides content before clicking start
  $("#doneBut").hide();
  $("#quiz").hide();

  // start game on click
  $("#startBut").on("click", function () {
    startGame();
  });

  //end game on click
  $("#doneBut").on("click", function () {
    endGame();
  });

  function startGame() {
    $("#startBut").hide();
    $("#quiz").show();
    $("#showTimer").append();
    $("#doneBut").show();
    timer();
    showQuestions();
    console.log("Game has started");
  }

  function endGame() {
    $("#showTimer, #doneBut, #mainQs").hide();
    stop();
    checkScore();
    showScore()
    console.log("times up");
    function stop() {
      clearInterval(intervalId);
    }
  }

  //Timer
  function timer() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  function decrement() {
    number--;
    $("#showTimer").html("<h1>Time remianing: <font color='red'>" + number + "</font></h1>");
    if (number === 0) {
      endGame();
    }
  }

  // function that loops through var questions and displays questions and choices with radio buttons
  function showQuestions() {
    for (var i = 0; i < questions.length; i++) {
      $("#mainQs").append('<div id="question"><font color="red">' + questions[i].question + '</font></div>')

      for (var j = 0; j < questions[i].choices.length; j++) {
        $("#mainQs").append('<div class="mainQ"><input class="input" type="radio" name="radio-group' + i + '" id="radio' + i + '"><label class="form-check-label" id="radio' + i + 'label" for="radio' + i + '">' + questions[i].choices[j] + '</label></div>');
      }
    }

  }

  // function that loops through questions and checks answers 
  function checkScore() {
    for (var i = 0; i < questions.length; i++) {
      userAns = $('input[id=radio' + i + ']:checked + label').text();
      correctAns = questions[i].answer;
      if (userAns == correctAns) {
        correct++;
        // console.log(correct);
      }
      else if (userAns == "") {
        unanswered++;
      }
      else if (userAns !== correctAns) {
        incorrect++;
      }
    }
  }

  function showScore() {
    $("#results").html("Correct Answers: <font color='red'>" + correct + "</font><br> Incorrect Answers: <font color='red'>" + incorrect + "</font> <br>Unanswered: <font color='red'>" + unanswered + "</font>");
  }
});


