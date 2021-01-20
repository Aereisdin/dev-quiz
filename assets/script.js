$(document).ready(function() {
    $("#problem").text("Welcome to Dev Quiz!");
$("#problem2").text("This is where your knowledge will be tested.");

// var quizContainer = document.getElementById('quiz');
// var resultsContainer = document.getElementById('results');
// var submitButton = document.getElementById('submit');
var correct = localStorage.getItem("correct")
    if("correct" !== null){correct = 0}
var incorrect = localStorage.getItem("incorrect")
    if("incorrect" !== null){ incorrect = 0}
var problems = [
    {
        question: "How is an array declared? var tacos = ?",
        answers:{
            a: "[]",
            b: "{}",
            c: "<>",
            d: "()"
        },
        correctAnswer: "a"
    },
    {
        question: "How is an object declared? var car = ?",
        answers:{
            a: "[]",
            b: "{}",
            c: "<>",
            d: "()",
        },
        correctAnswer: "b"
    },
    {
        question: "What is a for loop?",
        answers:{
            a: "loops through a block of code a number of times",
            b: "loops through a block of code while a specified condition is true",
            c: "a round circle with four parts",
            d: "a hairy hulahoop",
        },
        correctAnswer: "a"
    },
    {
        question: "What is a while loop?",
        answers:{
            a: "what you do while you wait for someone shopping",
            b: "loops through a block of code a number of times",
            c: "when you drive around the neighborhood instead of driving straight home",
            d: "loops through a block of code while a specified condition is true",
        },
        correctAnswer: "d"
    },
    {
        question: "What is a do loop?",
        answers:{
            a: "a type of loop you do while doing errands in town",
            b: "a particular type of hairdo common in the early 50s",
            c: "similar to a while loop but runs at least once",
            d: "loops that are loopy in that weird direct way",
        },
        correctAnswer: "c"
    },
    {
        question: "How do you select something in JQuery?",
        answers:{
            a: "$()",
            b: "#[]",
            c: "@{}",
            d: "&<>",
        },
        correctAnswer: "a"
    },
    {
        question: "What is the DOM?",
        answers:{
            a: "Direct Origin Mangos",
            b: "Document Orange Mixer",
            c: "Dog Object Maker",
            d: "Document Object Model",
        },
        correctAnswer: "d"
    },
    {
        question: "What is the Window?",
        answers:{
            a: "It's the glass thing imbedded in the wall",
            b: "a product made by Microsoft",
            c: "a reference to the browser display",
            d: "the monitor",
        },
        correctAnswer: "c"
    },
    {
        question: "What is the difference between === and ==?",
        answers:{
            a: "b & d",
            b: "== compares only values",
            c: "there is no difference",
            d: "=== compares values and data types",
        },
        correctAnswer: "a"
    },
    {
        question: "What does ES6 stand for?",
        answers:{
            a: "Essential Styles 6",
            b: "Ecclastic Situations 6",
            c: "Environment Salvaging 6",
            d: "ECMA Script 6",
        },
        correctAnswer: "d"
    },
    {
        question: "What is a callback?",
        answers:{
            a: "what you get if you did well on an audition",
            b: "a function passed as an argument to another function",
            c: "a phone call notifying you that you got the job",
            d: "the French word meaning to call someone back",
        },
        correctAnswer: "b"
    },
    {
        question: "How do you declare a function?",
        answers:{
            a: "you send out fancy invitations",
            b: "function name(){}",
            c: "$()",
            d: "you address a gathering in welcome",
        },
        correctAnswer: "b"
    },
    {
        question: "What is the most popular Javascript library?",
        answers:{
            a: "React",
            b: "Angular",
            c: "jQuery",
            d: "Python",
        },
        correctAnswer: "c"
    },
    {
        question: "Which of these is Camel Case?",
        answers:{
            a: "CamelCase",
            b: "camelcase",
            c: "Camelcase",
            d: "camelCase",
        },
        correctAnswer: "d"
    },
    {
        question: "What is let in Javascript?",
        answers:{
            a: "a variable that only be updated not re-declared",
            b: "a variable that can be updated and re-declared",
            c: "a variable that cannot be updated or re-declared",
            d: "a variable that loves lattes",
        },
        correctAnswer: "a"
    },
    {
        question: "What is const in Javascript?",
        answers:{
            a: "a variable that only be updated not re-declared",
            b: "a variable that can be updated and re-declared",
            c: "a variable that cannot be updated or re-declared",
            d: "a variable that may be a bit bound up",
        },
        correctAnswer: "c"
    },
    {
        question: "What is calling a function?",
        answers:{
            a: "typing the name of the function & ()",
            b: "dialing your mother to organize a shindig with fancy invitations",
            c: "making a function with a name",
            d: "deciding to hold a party",
        },
        correctAnswer: "a"
    },
    {
        question: "What are function arguments?",
        answers:{
            a: "fights with your mother on who to invite to your function",
            b: "disagreements that occur during an official function",
            c: "a value or values",
            d: "real values passed to and received by the function",
        },
        correctAnswer: "d"
    },
    {
        question: "What is a local variable?",
        answers:{
            a: "local unique knowledge",
            b: "a variable that only has a tiny scope",
            c: "a variable declared inside a function",
            d: "weather",
        },
        correctAnswer: "c"
    },
    {
        question: "What is an event?",
        answers:{
            a: "when the user or the browser manipulated the page",
            b: "when something happens that is important",
            c: "when a famous person does something",
            d: "when your mother is wrong",
        },
        correctAnswer: "a"
    },
    {
        question: "What is an object method?",
        answers:{
            a: "a function declared inside an object",
            b: "the way the ball rolls to the goal",
            c: "a way by which toast lands butter side up",
            d: "functionally objectable material",
        },
        correctAnswer: "a"
    },
    ]
    var i = 0;

$("#start").click(function (){
    $("#problem").text(problems[i].question).css("font-size", "24pt");
    $("#problem2").text("");
    // $(".select").text("");
    $(".timelabel").text("Time Remaining");
    $("#timer").text("0:00");
    $("#start").css("display", "none");
    $(".status").text("You will need to select the correct answer or you will have 10 seconds removed from your time.");
    $("#score").append("Correct: "+ correct +" Incorrect: "+ incorrect);
    $(".announcement").text("Once you select your first answer the timer will start.").css("visibility", "visible");
    $(".select").append("<p><button type='button' id='a' class='answers'>"+problems[i].answers.a+"</button></p>");
    $(".select").append("<p><button type='button' id='b' class='answers'>"+problems[i].answers.b+"</button></p>");
    $(".select").append("<p><button type='button' id='c' class='answers'>"+problems[i].answers.c+"</button></p>");
    $(".select").append("<p><button type='button' id='d' class='answers'>"+problems[i].answers.d+"</button></p>");
    $("#a").on("click", function() {
        if(i < 20){i++;}
       $("#a").text(problems[i].answers.a)
       $("#b").text(problems[i].answers.b)
       $("#c").text(problems[i].answers.c)
       $("#d").text(problems[i].answers.d)
       $("#problem").text(problems[i].question);
     });
    $("#b").on("click", function() {
        if(i < 20){i++;}
        $("#a").text(problems[i].answers.a)
        $("#b").text(problems[i].answers.b)
        $("#c").text(problems[i].answers.c)
        $("#d").text(problems[i].answers.d) 
        $("#problem").text(problems[i].question);
     });
     $("#c").on("click", function() {
        if(i < 20){i++;}
        $("#a").text(problems[i].answers.a)
        $("#b").text(problems[i].answers.b)
        $("#c").text(problems[i].answers.c)
        $("#d").text(problems[i].answers.d) 
        $("#problem").text(problems[i].question);
     });
     $("#d").on("click", function() {
        if(i < 20){i++;}
        $("#a").text(problems[i].answers.a)
        $("#b").text(problems[i].answers.b)
        $("#c").text(problems[i].answers.c)
        $("#d").text(problems[i].answers.d) 
        $("#problem").text(problems[i].question);
     });
        if(i > 0){$(".announcement").animate({visibility: visible});}
        
        
    });


  
// function quizBuild() {
//     var output = [];

//     problems.forEach(
//         (currentQuestion, questionNumber) => {
//             var answers = [];
//             for(letter in currentQuestion.answers){
//                 answers.push(
//                     `<label>
//                      <input type="radio" name="question${questionNumber}" value="${letter}">
//                      ${letter} :
//                     ${currentQuestion.answers[letter]}
//                     </label>`
//                 );
//             }
//             output.push(
//                 `<div class="question"> ${currentQuestion.question} </div>
//                     <div class="answers"> ${answers.join('')} </div>`
//             );
//         }
//     );
//     quizContainer.innerHTML = output.join('');
// }
// problems.forEach((currentQuestion, questionNumber) => {
//     var answers = [];
//     for(letter in currentQuestion.answers){
//         answers.push(
//             `<label>
//             <input type="radio" name="question${questionNumber}" value="${letter}">
//             ${letter} :
//             ${currentQuestion.answers[letter]}
//             </label>` 
//         );
//     }
//     output.push(
//         `<div class="question"> ${currentQuestion.question} </div>
//         <div class="answers"> ${answers.join('')} </div>`  
//     );
//     quizContainer.innerHTML = output.join('');
// });

// function onScreen() {
//     var answerContainers = quizContainer.querySelectorAll('.answers');
//     var numCorrect = 0;
//     problems.forEach( (currentQuestion, questionNumber) => {

//         var answerContainer = answerContainers[questionNumber];
//         var selector = 'input[name=question${questionNumer}]:checked';
//         var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         if(userAnswer === currentQuestion.correctAnswer){
//             numCorrect++;
//             answerContainers[questionNumber].style.color = 'lightgreen';
//         }
//         else{
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });
//     resultsContainer.innerHTML = '${numCorrect} out of ${problems.length}';
// }
// var answerContainers = quizContainer.querySelectorAll('.answers');
// var numCorrect = 0;

// problems.forEach( (currentQuestion, questionNumber) => {
//     var answerContainer = answerContainers[questionNumber];
//     var selector = 'input[name=question${questionNumber}]:checked';
//     var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//     if(userAnswer === currentQuestion.correctAnswer){
//         numCorrect++;
//         answerContainers[questionNumber].style.color = 'lightgreen';
//     }
//     else{
//         answerContainers[questionNumber].style.color = 'red';
//     }
// });

// quizBuild();

// submitButton.on("click", onScreen);
})