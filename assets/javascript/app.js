
// Hide Answers

 $(".ans").hide();

// Timer Functions

    var number = 50;

    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $("#finalAnswer").on("click", stop);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#timer").html(number);


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

    
   // Score Functions

    $("#finalAnswer").on("click", function score () {

    $(".ans").show();

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var numOfQuestions = 6;
    var ansArr = ['c', 'a', 'd', 'b', 'a', 'c'];
    var cResult;
   

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;

    console.log(q1);
    console.log(q2);
    console.log(q3);
    console.log(q4);
    console.log(q5);
    console.log(q6);

    for(var i = 1; i <= numOfQuestions; i++) {
      if (eval('q' + i) == '') {
      unanswered++;
      }
    }

    console.log(unanswered);

     for(var i = 1; i <= numOfQuestions; i++) {
     if (eval('q' + i) == ansArr[i - 1]) {
     correct++;
      } 
    }

    console.log(correct);

    var wResult = numOfQuestions - (unanswered + correct);

    console.log(wResult);
  
   });
    