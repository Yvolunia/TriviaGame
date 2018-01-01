
// Hide Answers

 $(".ans").hide();

// Timer Functions

    var number = 50;

    var intervalId;

    $("#finalAnswer").on("click", stop);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html(number);

      if (number === 0) {

        stop();

        alert("Time Up!");

      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();


    // Score Functions

    $("#finalAnswer").on("click", function score () {

    $(".ans").show();

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var numOfQuestions = 6;
    var ansArr = ['c', 'a', 'd', 'b', 'a', 'c'];
   

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

    var uResults = ["Unanswered:  " + unanswered];
     $("#empty").html(uResults);

    console.log(unanswered);

     for(var i = 1; i <= numOfQuestions; i++) {
     if (eval('q' + i) == ansArr[i - 1]) {
     correct++;
      } 
    }

     var cResults = ["Correct:  " + correct];
     $("#right").html(cResults);
    
     var iResults = ["Incorrect:  " + (numOfQuestions - (unanswered + correct))];
     $("#wrong").html(iResults);

    console.log(correct);
    console.log(wResult);
  
   });
    
   
 

