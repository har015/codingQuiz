//variables
var questionsEl = document.getElementById("questions");
var timer = document.getElementById("timer");
var start = document.getElementById("start");
var option1 =document.getElementById("a");
var option2 =document.getElementById("b");
var option3 =document.getElementById("c");
var option4 =document.getElementById("d");
var end = document.getElementById("endQuiz");
var keepScore = document.getElementById("keepScore");
var continue1 = document.getElementById("continue")
var actualTime = 100;
var actualScore =0;
var timerTime;
var scoreScore;
var questionArray = 0;

//creates the question
var makeQuestion = [{
    question: "stirng values must be enclosed with",
    choose1: "commas",
    choose2: "curly brackets",
    choose3: "parenthesis",
    choose4: "quotes",
    correctOption:"4"},
    {
        question: "arrays in javascrip can be used to store",
        choose1: "numbers and strings",
        choose2: "other arrays",
        choose3: "booleans",
        choose4: "all of the above",
        correctOption:"4"},
        {
            question: "the condition in an if/else statment is enclosed with",
            choose1: "quotes",
            choose2: "square brakcets",
            choose3: "prenthesis",
            choose4: "curly brakets",
            correctOption:"4"},
];
//uses created question and shows it to user
function showQuestion(){
    var viewQuestion = makeQuestion[questionArray];
    questionsEl.innerHTML = "<p>" + viewQuestion.question +"</p>";
    option1.innerHTML = viewQuestion.choose1;
    option2.innerHTML = viewQuestion.choose2;
    option3.innerHTML = viewQuestion.choose3;
    option4.innerHTML = viewQuestion.choose4;
};

//timer
function countDown (){
    actualTime--;
    timer.textContent = "time:" + actualTime;
    if (actualTime <= 0){
        endQuiz();
    }
}
//controls what happens when user begins
function beignQuiz(){
    showQuestion();
    countDown();
    setInterval(countDown,1000);
}
//shows current score to user
function showScore (){
keepScore.textContent= "Score:" + actualScore;
}
function rightAwnser(){
    showScore();
    actualScore++;
}
//affects the score and timer when user gets wrong awnser
function wrongAwnser(){
    showScore();
    actualScore--;
    actualTime = actualTime - 10;
}
//user can change question when awnsered
function nextQuest(){
    questionArray++;
    showQuestion();
}
//user is able to save initials and score
function endingScreen (){
    var initials = window.prompt("what are your intials?")
    alert( "Your initials: " + initials +" "+ "Score:" +actualScore)
}
//user contorls when quiz ends
function endQuiz(){
timer.textContent= "Time :0";
actualTime =0;
endingScreen();
showQuestion.reset();
}
//reads in when user clicks button
option1.addEventListener("click", wrongAwnser)
option2.addEventListener("click", wrongAwnser)
option3.addEventListener("click", wrongAwnser)
option4.addEventListener("click", rightAwnser)
start.addEventListener("click",beignQuiz)
continue1.addEventListener("click",nextQuest)
end.addEventListener("click",endQuiz)
