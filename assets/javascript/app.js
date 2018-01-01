
// Hide Answers

 $(".ans").hide();

// Timer Functions

    var number = 50;

    var intervalId;

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#timer").html(number);

      if (number === 0) {

        alert("Time Up!");

        stop();

        score();

      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();

    // Submit Button Event

    $("#finalAnswer").on("click", stop);
    $("#finalAnswer").on("click", score);

    // Score Functions

    function score () {

     $(".ans").show();

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;
    var numOfQuestions = 6;
    var ansArr = ['d', 'b', 'a', 'a', 'c', 'd'];
   

    var q1 = document.forms['quiz']['q1'].value;
    var q2 = document.forms['quiz']['q2'].value;
    var q3 = document.forms['quiz']['q3'].value;
    var q4 = document.forms['quiz']['q4'].value;
    var q5 = document.forms['quiz']['q5'].value;
    var q6 = document.forms['quiz']['q6'].value;


    for(var i = 1; i <= numOfQuestions; i++) {
      if (eval('q' + i) == '') {
      unanswered++;
      }
    }

    var uResults = ["Unanswered:  " + unanswered];
     $("#empty").html(uResults);


     for(var i = 1; i <= numOfQuestions; i++) {
     if (eval('q' + i) == ansArr[i - 1]) {
     correct++;
      } 
    }

     var cResults = ["Correct:  " + correct];
     $("#right").html(cResults);
    
     var iResults = ["Incorrect:  " + (numOfQuestions - (unanswered + correct))];
     $("#wrong").html(iResults);
  
   };
    
   
 

