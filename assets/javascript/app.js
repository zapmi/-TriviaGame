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
    $("#form").text("Time's up!!!");

    
  }
}


// function butClick() {
//   console.log("times up");
//   document.getElementById("demo").innerHTML = "Hello World";
// }




// $("button").click(function() {
//   $(this).data('clicked', true);
// });

// if($("button").data('clicked')) {
//   console.log("times up!!!!");
//   $("#form").text("Time's up!!!");
// }

function stop() {
  clearInterval(intervalId);
}

run();



// function submitBut() {
//   document.getElementById("demo").innerHTML = "Hello World";
// }

// $("#form").on("submit", function (event) {
//   event.preventDefault();
//   stop();
//   var $answer = $("#form");
//   var answer = $answer.val();
//   console.log(answer);
//   if (answer === "correct"){
//     $("#form").text("TEST");
//   }
// });











// });