var counter = 1;
function chk_quiz1() {
  var answer1 = document.getElementById("answer-1").value;
  var answer2 = document.getElementById("answer-2").value;
  var answer3 = document.getElementById("answer-3").value;
  var answer4 = document.getElementById("answer-4").value;
  var answer5 = document.getElementById("answer-5").value;
  var message = document.getElementById("quiz-message");
  var quiz_box1 = document.getElementById("quiz-1");
  var next = document.getElementById("next-btn");
  answers=["1","2","3","4","5"];
   if(answers[0] === answer1 && answers[1] === answer2 && answers[2] === answer3 && answers[3] === answer4 && answers[4] === answer5 )
   {
    message.removeAttribute("style");
    message.innerHTML = "LOREM IPSUM";
    next.removeAttribute("style");
    quiz_box1.removeAttribute("style");
   }
   else
   {
     alert("Wrong Answer !!!!!");
   }
}

function chk_quiz2() {
  var answer21 = document.getElementById("answer-21").value;
  var answer22 = document.getElementById("answer-22").value;
  var answer23 = document.getElementById("answer-23").value;
  var answer24 = document.getElementById("answer-24").value;
  var answer25 = document.getElementById("answer-25").value;
  var message = document.getElementById("quiz-message");
  var quiz_box2 = document.getElementById("quiz-2");
  var next = document.getElementById("next-btn");
  answers=["5","6","7","8","9"];
   if(answers[0] === answer21 && answers[1] === answer22 && answers[2] === answer23 && answers[3] === answer24 && answers[4] === answer25 )
   {
    message.removeAttribute("style");
    message.innerHTML = "LOREM IPSUM 2 ";
    next.removeAttribute("style");
    quiz_box2.removeAttribute("style");
   }
   else
   {
     alert("Wrong Answer !!!!!");
   }
}

function chk_quiz3() {
  var answer31 = document.getElementById("answer-31").value;
  var answer32 = document.getElementById("answer-32").value;
  var answer33 = document.getElementById("answer-33").value;
  var answer34 = document.getElementById("answer-34").value;
  var answer35 = document.getElementById("answer-35").value;
  var message = document.getElementById("quiz-message");
  var quiz_box3 = document.getElementById("quiz-3");
  var next = document.getElementById("next-btn");
  answers=["10","11","12","13","14"];
   if(answers[0] === answer31 && answers[1] === answer32 && answers[2] === answer33 && answers[3] === answer34 && answers[4] === answer35 )
   {
    message.removeAttribute("style");
    message.innerHTML = "LOREM IPSUM 3 ";
    next.removeAttribute("style");
    quiz_box3.removeAttribute("style");
   }
   else
   {
     alert("Wrong Answer !!!!!");
   }
}

function chk_quiz4() {
  var answer41 = document.getElementById("answer-41").value;
  var answer42 = document.getElementById("answer-42").value;
  var answer43 = document.getElementById("answer-43").value;
  var answer44 = document.getElementById("answer-44").value;
  var answer45 = document.getElementById("answer-45").value;
  var message = document.getElementById("quiz-message");
  var quiz_box4 = document.getElementById("quiz-4");
  var next = document.getElementById("next-btn");
  answers=["15","16","17","18","19"];
   if(answers[0] === answer41 && answers[1] === answer42 && answers[2] === answer43 && answers[3] === answer44 && answers[4] === answer45 )
   {
    message.removeAttribute("style");
    message.innerHTML = "LOREM IPSUM 4 ";
    next.removeAttribute("style");
    quiz_box4.removeAttribute("style");
   }
   else
   {
     alert("Wrong Answer !!!!!");
   }
}

function chk_quiz5() {
  var answer51 = document.getElementById("answer-51").value;
  var answer52 = document.getElementById("answer-52").value;
  var answer53 = document.getElementById("answer-53").value;
  var answer54 = document.getElementById("answer-54").value;
  var answer55 = document.getElementById("answer-55").value;
  var message = document.getElementById("quiz-message");
  var quiz_box5 = document.getElementById("quiz-5");
  var next = document.getElementById("next-btn");
  answers=["15","16","17","18","19"];
   if(answers[0] === answer51 && answers[1] === answer52 && answers[2] === answer53 && answers[3] === answer54 && answers[4] === answer55 )
   {
    message.removeAttribute("style");
    message.innerHTML = "LOREM IPSUM 5c ";
    next.removeAttribute("style");
    quiz_box5.removeAttribute("style");
   }
   else
   {
     alert("Wrong Answer !!!!!");
   }
}


function next_quiz() {
  var quiz_box2 = document.getElementById("quiz-2");
  var quiz_box3 = document.getElementById("quiz-3");
  var quiz_box4 = document.getElementById("quiz-4");
  var quiz_box5 = document.getElementById("quiz-5");
  var message = document.getElementById("quiz-message");
  var next = document.getElementById("next-btn");
  counter += 1;
  if(counter === 2)
  {
    quiz_box2.setAttribute("style","display:block");
    next.setAttribute("style","display:none");
    message.setAttribute("style","display:none");
  }
  else if(counter === 3)
  {
    quiz_box3.setAttribute("style","display:block");
    next.setAttribute("style","display:none");
    message.setAttribute("style","display:none");
  }

  else if(counter === 4)
  {
    quiz_box4.setAttribute("style","display:block");
    next.setAttribute("style","display:none");
    message.setAttribute("style","display:none");
  }

  else if(counter === 5)
  {
    quiz_box5.setAttribute("style","display:block");
    next.setAttribute("style","display:none");
    message.setAttribute("style","display:none");
  }
}