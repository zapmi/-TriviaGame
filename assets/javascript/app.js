var number = 100;

    var intervalId;

   

    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#show-number").html("<h1>Time remianing: " + number + "</h1>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();


    if (value == "The Lion King"){
        alert("winner!!");
    }
