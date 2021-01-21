$(document).ready(function() {
    $("#problem").text("Welcome to Dev Quiz!");
    $("#problem2").text("This is where your knowledge will be tested.");

var correct = 0;
var incorrect = 0;   
var wins = localStorage.getItem("wins")
    if("wins" == null){wins = 0}
var losses = localStorage.getItem("losses")
    if("losses" == null){ losses = 0}
var problems = [
    {
        question: "How is an array declared? var tacos = ?",
        answers:{
            a: "[]",
            b: "{}",
            c: "<>",
            d: "()"
        },
        correctAnswer: "[]"
    },
    {
        question: "How is an object declared? var car = ?",
        answers:{
            a: "[]",
            b: "{}",
            c: "<>",
            d: "()",
        },
        correctAnswer: "{}"
    },
    {
        question: "What is a for loop?",
        answers:{
            a: "loops through a block of code a number of times",
            b: "loops through a block of code while a specified condition is true",
            c: "a round circle with four parts",
            d: "a hairy hulahoop",
        },
        correctAnswer: "loops through a block of code a number of times"
    },
    {
        question: "What is a while loop?",
        answers:{
            a: "what you do while you wait for someone shopping",
            b: "loops through a block of code a number of times",
            c: "when you drive around the neighborhood",
            d: "loops through a block of code while a specified condition is true",
        },
        correctAnswer: "loops through a block of code while a specified condition is true"
    },
    {
        question: "What is a do loop?",
        answers:{
            a: "a type of loop you do while doing errands in town",
            b: "a particular type of hairdo common in the early 50s",
            c: "similar to a while loop but runs at least once",
            d: "loops that are loopy in that weird direct way",
        },
        correctAnswer: "similar to a while loop but runs at least once"
    },
    {
        question: "How do you select something in JQuery?",
        answers:{
            a: "$()",
            b: "#[]",
            c: "@{}",
            d: "&<>",
        },
        correctAnswer: "$()"
    },
    {
        question: "What is the DOM?",
        answers:{
            a: "Direct Origin Mangos",
            b: "Document Orange Mixer",
            c: "Dog Object Maker",
            d: "Document Object Model",
        },
        correctAnswer: "Document Object Model"
    },
    {
        question: "What is the Window?",
        answers:{
            a: "It's the glass thing imbedded in the wall",
            b: "a product made by Microsoft",
            c: "a reference to the browser display",
            d: "the monitor",
        },
        correctAnswer: "a reference to the browser display"
    },
    {
        question: "What is the difference between === and ==?",
        answers:{
            a: "2nd option & 4th option",
            b: "== compares only values",
            c: "there is no difference",
            d: "=== compares values and data types",
        },
        correctAnswer: "2nd option & 4th option"
    },
    {
        question: "What does ES6 stand for?",
        answers:{
            a: "Essential Styles 6",
            b: "Ecclastic Situations 6",
            c: "Environment Salvaging 6",
            d: "ECMA Script 6",
        },
        correctAnswer: "ECMA Script 6"
    },
    {
        question: "What is a callback?",
        answers:{
            a: "what you get if you did well on an audition",
            b: "a function passed as an argument to another function",
            c: "a phone call notifying you that you got the job",
            d: "the French word meaning to call someone back",
        },
        correctAnswer: "a function passed as an argument to another function"
    },
    {
        question: "How do you declare a function?",
        answers:{
            a: "you send out fancy invitations",
            b: "function name(){}",
            c: "$()",
            d: "you address a gathering in welcome",
        },
        correctAnswer: "function name(){}"
    },
    {
        question: "What is the most popular Javascript library?",
        answers:{
            a: "React",
            b: "Angular",
            c: "jQuery",
            d: "Python",
        },
        correctAnswer: "jQuery"
    },
    {
        question: "Which of these is Camel Case?",
        answers:{
            a: "CamelCase",
            b: "camelcase",
            c: "Camelcase",
            d: "camelCase",
        },
        correctAnswer: "camelCase"
    },
    {
        question: "What is let in Javascript?",
        answers:{
            a: "a variable that only be updated not re-declared",
            b: "a variable that can be updated and re-declared",
            c: "a variable that cannot be updated or re-declared",
            d: "a variable that loves lattes",
        },
        correctAnswer: "a variable that only be updated not re-declared"
    },
    {
        question: "What is const in Javascript?",
        answers:{
            a: "a variable that only be updated not re-declared",
            b: "a variable that can be updated and re-declared",
            c: "a variable that cannot be updated or re-declared",
            d: "a variable that may be a bit bound up",
        },
        correctAnswer: "a variable that cannot be updated or re-declared"
    },
    {
        question: "What is calling a function?",
        answers:{
            a: "typing the name of the function & ()",
            b: "dialing your mother to organize a shindig with fancy invitations",
            c: "making a function with a name",
            d: "deciding to hold a party",
        },
        correctAnswer: "typing the name of the function & ()"
    },
    {
        question: "What are function arguments?",
        answers:{
            a: "fights with your mother on who to invite to your function",
            b: "disagreements that occur during an official function",
            c: "a value or values",
            d: "real values passed to and received by the function",
        },
        correctAnswer: "real values passed to and received by the function"
    },
    {
        question: "What is a local variable?",
        answers:{
            a: "local unique knowledge",
            b: "a variable that only has a tiny scope",
            c: "a variable declared inside a function",
            d: "weather",
        },
        correctAnswer: "a variable declared inside a function"
    },
    {
        question: "What is an event?",
        answers:{
            a: "when the user or the browser manipulated the page",
            b: "when something happens that is important",
            c: "when a famous person does something",
            d: "when your mother is wrong",
        },
        correctAnswer: "when the user or the browser manipulated the page"
    },
    {
        question: "What is an object method?",
        answers:{
            a: "a function declared inside an object",
            b: "the way the ball rolls to the goal",
            c: "a way by which toast lands butter side up",
            d: "functionally objectable material",
        },
        correctAnswer: "a function declared inside an object"
    },
    ]
var i = 0;
var isWaiting = false;
var isRunning = false;
var seconds = 60;
var countdownTimer;
var finalCountdown = false;
    
function finished() {
    clearInterval(countdownTimer)
    $("#problem").empty()
    $("#a").text("Thank You")
    $("#b").text("for playing")
    $("#c").text("this little game!")
    $("#d").text("Come again!")
    if (correct >= 16){$("#problem").text("Congratulations! You've won!").css("font-size", "32pt");
        $("#problem2").text("If you would like to try again please refresh the page.")
        wins++;
        localStorage.setItem("wins", wins);
        localStorage.setItem("losses", losses);
        $("#wins").empty();
        $("#wins").append("Wins: "+ wins +" Losses: "+ losses);}
    else {$("#problem").text("Oh no!. Please study more.").css("font-size", "32pt");
        $("#problem2").text("If you would like to try again please refresh the page.")
        losses++;
        localStorage.setItem("wins", wins);
        localStorage.setItem("losses", losses);
        $("#wins").empty();
        $("#wins").append("Wins: "+ wins +" Losses: "+ losses);}
    }
 function GameTimer() {
    var minutes = Math.round((seconds - 30) / 60);
    var remainingSeconds = seconds % 60;
        if (remainingSeconds < 10) {
            remainingSeconds = "0" + remainingSeconds;
        }
    document.getElementById('timer').innerHTML = minutes + ":" + remainingSeconds;
        if (seconds == 0) {
            isRunning = true;
            finished();
            
            if (finalCountdown) {
                (countdownTimer);} 
            else {finalCountdown = true;}} 
        else {isWaiting = true;
            seconds--;}
    }
$("#start").click(function (){
    $("#problem").text(problems[i].question);
    $("#problem2").text("");
    $(".timelabel").text("Time Remaining");
    $("#timer").text("0:00");
    $("#start").css("display", "none");
    $(".status").text("You will need to select the correct answer or you will have 1 seconds removed from your time.");
    $("#score").append("Correct: "+ correct +" Incorrect: "+ incorrect);
    $("#wins").append("Wins: "+wins+" Losses: "+losses);
    $(".select").append("<p><button type='button' id='a' class='answers'>"+problems[i].answers.a+"</button></p>");
    $(".select").append("<p><button type='button' id='b' class='answers'>"+problems[i].answers.b+"</button></p>");
    $(".select").append("<p><button type='button' id='c' class='answers'>"+problems[i].answers.c+"</button></p>");
    $(".select").append("<p><button type='button' id='d' class='answers'>"+problems[i].answers.d+"</button></p>");
    countdownTimer = setInterval(GameTimer, 1000);
    $("#a").on("click", function() {
        if(problems[i].answers.a == problems[i].correctAnswer && i < 20){
            correct++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);}
        else if (problems[i].answers.a != problems[i].correctAnswer && i < 20){
            incorrect++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);
            seconds--;}
        else if (problems[i].answers.a == problems[i].correctAnswer && i === 20){
                seconds = 0;}
        else if (problems[i].answers.a != problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (incorrect = 20){seconds = 0;}
     });
    $("#b").on("click", function() {
        if(problems[i].answers.b == problems[i].correctAnswer && i < 20){
            correct++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);}
        else if (problems[i].answers.b != problems[i].correctAnswer && i < 20){
            incorrect++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);
            seconds--;}
        else if (problems[i].answers.b == problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (problems[i].answers.b != problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (incorrect = 20){seconds = 0;}
        });
     $("#c").on("click", function() {
        if(problems[i].answers.c == problems[i].correctAnswer && i < 20){
            correct++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d); 
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);}
        else if (problems[i].answers.c != problems[i].correctAnswer && i < 20){
            incorrect++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);
            seconds--;}
        else if (problems[i].answers.c == problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (problems[i].answers.c == problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (incorrect = 20){seconds = 0;}
        });
     $("#d").on("click", function() {
        if(problems[i].answers.d == problems[i].correctAnswer && i < 20){
            correct++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d); 
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);}
        else if (problems[i].answers.d != problems[i].correctAnswer && i < 20){
            incorrect++;
            i++;
            $("#a").text(problems[i].answers.a);
            $("#b").text(problems[i].answers.b);
            $("#c").text(problems[i].answers.c);
            $("#d").text(problems[i].answers.d);
            $("#problem").text(problems[i].question);
            $("#score").empty().append("Correct: "+ correct +" Incorrect: "+ incorrect);
            seconds--;}
        else if (problems[i].answers.d == problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (problems[i].answers.d == problems[i].correctAnswer && i === 20){
            seconds = 0;}
        else if (incorrect = 20){seconds = 0;}
        });

         
     
    });
 
})