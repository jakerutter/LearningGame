

//This function is the outermost function.
function PlayMathGame(){
        var returnBool;

       if (labelResults.innerHTML != ""){
           var didBoolReturn = resetStyles(returnBool); 
       }
       if (labelResults.innerHTML == "" || didBoolReturn){
        if (document.getElementById('correctCounter') > 0){
            var currentScore = document.getElementById('correctCounter').value;
        }
        
        problemObj = new createMathProblem(0,0,"","",0);
        
        createMathProblem(problemObj);
        determineAnswer(problemObj);
        populateMathProblem(problemObj);
        populateAnswers(problemObj);


        $("#Top").on('click', function () {
            removeBinding();
            compareSelection(problemObj, this);
            // Closure
            return () => PlayMathGame();
        });
        $("#Left").on('click', function () {
            removeBinding();
            compareSelection(problemObj, this);
            // Closure
            return () => PlayMathGame();
        });
        $("#Right").on('click', function () {
            removeBinding();
            compareSelection(problemObj, this);
            // Closure
            return () => PlayMathGame();
        });
        $("#Bottom").on('click', function () {
            removeBinding();
            compareSelection(problemObj, this);
            // Closure
            return () => PlayMathGame();
        });
    
    }else{ return;
    }};

//functions
function createProblemObj(num1, num2, sign, problem, correctAnswer){
    this.num1 = num1;
    this.num2 = num2;
    this.sign = sign;
    this.problem = problem;
    this.correctAnswer = correctAnswer;
    }
//Takes problem obj and calls the appropriate Math Function
function createMathProblem(problemObj) {
    var radioValue = $("input[name='problemSize']:checked").val();
    var radioType = $("input[name='problemType']:checked").val();
   if(problemObj.problem = ""){
    var num1 = getRandomInt(0, radioValue);
    var num2 = getRandomInt(0, radioValue);
    var sign;
    var correctAnswer;

    if (radioType == "addsub"){
        var signForOperation = Math.random();
        if (signForOperation < .5 || radioType == "sub"){
            sign = "-";
             num1 = Math.max(num1,num2);
             num2 = Math.min(num1,num2);
        }
        else if (signForOperation >= .5 || radioType == "add"){
            sign = "+";
        }
    }
    else if (radioType == "add"){
        sign = "+";
    }
    else if (radioType == "sub"){
        sign = "-";
    }
    else if (radioType == "multdiv"){
        var signForOperation = Math.random();
        if (signForOperation < .5){
            sign = "/";
            num1 = Math.max(num1,num2)+1;
            num2 = getFactors(num1);
        }
        else if (signForOperation >= .5 || radioType == "mult"){
            sign = "*";
        }
    }
    else if (radioType == "mult"){
        sign = "*";
    }
    else if (radioType == "div"){
        sign = "/";
        num1 = Math.max(num1,num2)+1;
        num2 = getFactors(num1);
    }
         
        var problem = (num1.toString()+ sign + num2.toString());
        problemObj.num1 = num1;
        problemObj.num2 = num2;
        problemObj.sign = sign;
        problemObj.problem = problem;

    } else {

         num1 = getRandomInt(0, radioValue);
         num2 = getRandomInt(0, radioValue);
         sign = "";
         correctAnswer;
         if (radioType == "addsub"){
            signForOperation = Math.random();
            if (signForOperation < .5){
                sign = "-";
                 num1 = Math.max(num1,num2);
                 num2 = Math.min(num1,num2);
            }
            else if (signForOperation >= .5){
                sign = "+";
            }
        }
        else if (radioType == "add"){
            sign = "+";
        }
        else if (radioType == "sub"){
            sign = "-";
            num1 = Math.max(num1,num2);
            num2 = Math.min(num1,num2);
        }
        else if (radioType == "multdiv"){
            signForOperation = Math.random();
            if (signForOperation < .5){
                sign = "/";
                num1 = Math.max(num1,num2)+1;
                num2 = getFactors(num1);
            }
            else if (signForOperation >= .5){
                sign = "*";
            }
        }
        else if (radioType == "mult"){
            sign = "*";
        }
        else if (radioType == "div"){
            sign = "/";
            num1 = Math.max(num1,num2)+1;
            num2 = getFactors(num1);
        }
             
            problem = (num1.toString()+ sign + num2.toString());
            problemObj.num1 = num1;
            problemObj.num2 = num2;
            problemObj.sign = sign;
            problemObj.problem = problem;
        }
                 
        return problemObj;
    }
    //Broken Code. I like the switch if I can find out how to integrate it and shorten the code I want to:


//Populate the correct answer value
function determineAnswer(problemObj){
    var correctAnswer = "";
    if (problemObj.sign == "+"){
        correctAnswer = Number(problemObj.num1+problemObj.num2);
    }
    if (problemObj.sign == "-"){
        if (problemObj.num1 > problemObj.num2){ 
            correctAnswer = Number(problemObj.num1-problemObj.num2);
        }
        else {
            correctAnswer = Number(problemObj.num2-problemObj.num1);
        }
    }
    if (problemObj.sign == "*"){
        correctAnswer = Number(problemObj.num1 * problemObj.num2);
    }
    if (problemObj.sign == "/"){
        correctAnswer = Number(problemObj.num1 / problemObj.num2);
    }
    problemObj.correctAnswer = correctAnswer;

    return problemObj;
        }

//Function that will take the generated math problem and place it
//into the questionArea button.
function populateMathProblem(problemObj){
    var span = document.getElementById("questionArea");
    if(span.firstChild) {
        span.removeChild(span.firstChild);

        span.appendChild(document.createTextNode(problemObj.problem.toString()) );
            }
    else {
        span.appendChild(document.createTextNode(problemObj.problem.toString()));
    }
    }

//Function that will for correct answers and false answers and
//place them into the answerOption areas.
function populateAnswers(problemObj){
    var myAnswersArray = [];
    var correctAnswer = problemObj.correctAnswer;
    var answer2 = correctAnswer + 1;
    var answer3 = correctAnswer + 2;
    var answer4 = correctAnswer + 3;
    var answer5 = correctAnswer + 4;

    myAnswersArray = [answer2, answer3, answer4, answer5];

    if (correctAnswer >= 1){
        var answer6 = correctAnswer - 1;
        myAnswersArray.push(answer6);
    }
    if (correctAnswer >= 2){
        var answer7 = correctAnswer - 2;
        myAnswersArray.push(answer7);
    }
    if (correctAnswer >= 3){
        var answer8 = correctAnswer - 3;
        myAnswersArray.push(answer8);
    }
    if (correctAnswer >= 4){
        var answer9 = correctAnswer - 4;
        myAnswersArray.push(answer9);
    }
    
    var mySpanArray = ["Top", "Left", "Right", "Bottom"];

    //Select one of the 4 locations to hold the correct answer.
    var correctAnswerLocation = (document.getElementById(mySpanArray[Math.floor(Math.random()* mySpanArray.length)])).id;

    replaceValuesInButton(correctAnswerLocation, correctAnswer);
   
    var placeIndex = mySpanArray.indexOf(correctAnswerLocation);
  
        mySpanArray.splice(placeIndex, 1);
  

    // Here are the random options that will get plugged into the remaining answer locations. 
        var placementObj = [
            {"id": ""},
            {"id": ""}];

            
    placementObj.placesForNumbers = mySpanArray;
    placementObj.possibleAnswers = myAnswersArray;
    
    numberPlacement(placementObj);
        }    

function numberPlacement(placementObj) {
    var mySpanArray = placementObj.placesForNumbers;
    var myAnswersArray = placementObj.possibleAnswers;
    var counter = 3;
    while (counter > 0) {
        var place = (document.getElementById(mySpanArray[Math.floor(Math.random()* mySpanArray.length)])).id;
        var value = myAnswersArray[Math.floor(Math.random() * myAnswersArray.length)];

        replaceValuesInButton(place, value)
    
        var placeIndex = mySpanArray.indexOf(place);
        
            mySpanArray.splice(placeIndex, 1);
        
        //This part removes the random index that was selected from the array so
        //there are not duplicate answers.
        var index = myAnswersArray.indexOf(value);
        
            myAnswersArray.splice(index, 1);

        counter -= 1;
        placementObj.placesForNumbers = mySpanArray;
        placementObj.possibleAnswers = myAnswersArray;
    }
    return placementObj;    
    }

function replaceValuesInButton(place,value){
    var thisPlace = document.getElementById(place);
     if(thisPlace.firstChild) {

        thisPlace.removeChild(thisPlace.firstChild);

        thisPlace.appendChild(document.createTextNode(value.toString()));
            }
    else {
        thisPlace.appendChild(document.createTextNode(value.toString()));
    }
    }

function compareSelection(problemObj, selection){
    var selectedAnswer = selection.innerHTML;
    var correctCount = parseInt($('#correctCounter').text());
    var questionsAnswered = parseInt($('#questionsAnswered').text());
    var percentCorrect = parseInt($('#percentCorrect').text());
    var globalCorrect = parseInt($('#globalCorrect').text());

    if (selectedAnswer == problemObj.correctAnswer){
        document.getElementById("labelResults").innerHTML = "You are correct!";
        correctCount += 1;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('correctAnswer');
        globalCorrect += 1;
        document.getElementById('globalCorrect').innerHTML = globalCorrect;
        
    }
    else {
        document.getElementById("labelResults").innerHTML = "Please try again.";
        correctCount = 0;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('wrongAnswer');
    }

    questionsAnswered += 1;
    document.getElementById('questionsAnswered').innerHTML = questionsAnswered.toString();
    percentCorrect = (globalCorrect/questionsAnswered)*100;
    document.getElementById('globalCorrect').innerHTML = globalCorrect.toString();
    document.getElementById('percentCorrect').innerHTML = percentCorrect.toFixed(2) + "%";
    document.getElementById('totalCorrect').innerHTML = globalCorrect.toString();
    
    }

function removeBinding(){
    $("#Top").off('click');
    $("#Left").off('click');
    $("#Right").off('click');
    $("#Bottom").off('click');
    }

function resetStyles(returnBool){
    returnBool = false;
    if((document.getElementById('Top')).classList.contains('correctAnswer')) {
        document.getElementById('Top').classList.remove('correctAnswer');
        returnBool = true;
    }
    if(document.getElementById('Top').classList.contains('wrongAnswer')) {
        document.getElementById('Top').classList.remove('wrongAnswer');
        returnBool = true;
    }
    if(document.getElementById('Left').classList.contains('correctAnswer')) {
        document.getElementById('Left').classList.remove('correctAnswer');
        returnBool = true;
    }
    if(document.getElementById('Left').classList.contains('wrongAnswer')) {
        document.getElementById('Left').classList.remove('wrongAnswer');
        returnBool = true;
    }
    if(document.getElementById('Right').classList.contains('correctAnswer')) {
        document.getElementById('Right').classList.remove('correctAnswer');
        returnBool = true;
    }
    if(document.getElementById('Right').classList.contains('wrongAnswer')) {
        document.getElementById('Right').classList.remove('wrongAnswer');
        returnBool = true;
    }
    if(document.getElementById('Bottom').classList.contains('correctAnswer')) {
        document.getElementById('Bottom').classList.remove('correctAnswer');
        returnBool = true;
    }
    if(document.getElementById('Bottom').classList.contains('wrongAnswer')) {
        document.getElementById('Bottom').classList.remove('wrongAnswer');
        returnBool = true;
    }
    return returnBool;
    };

    //The maximum and the minimum is inclusive.
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
      }

function add(problemObj){
    problemObj.sign = "+";
    return problemObj; 
    }

function subtract(problemObj){
    problemObj.sign = "-";
    problemObj.num1 = Math.max(problemObj.num1, problemObj.num2);
    problemObj.num2 = Math.min(problemObj.num1, problemObj.num2);
    return problemObj; 
    }

function multiply(problemObj){
    problemObj.sign = "*";
    return problemObj;
    }

function divide(problemObj){
    problemObj.sign = "/";
    problemObj.num1 = Math.max(problemObj.num1, problemObj.num2);
    problemObj.num2 = Math.min(problemObj.num1, problemObj.num2);
    var extra = problemObj.num1 % problemObj.num2;
    problemObj.num2 -= extra;
    return problemObj;
    }
function getFactors(num){
    var factorArray = [];
        for (i=1;i<=num;i++){
            if (num % i == 0){
                factorArray.push(i);
            }
        }
        return factorArray[Math.floor(Math.random() * factorArray.length)];
    }

    //     var radioValue = $("input[name='problemSize']:checked").val();
//     var radioType = $("input[name='problemType']:checked").val();
//     var signForOperation = Math.random();
//    if(problemObj.problem = ""){
//     problemObj.num1 = getRandomInt(0, radioValue);
//     problemObj.num2 = getRandomInt(0, radioValue);
//     problemObj.sign = "";
//     problemObj.correctAnswer = "";
//         switch(radioType){
//         case "addsub":
//             if (signForOperation >= .5){
//                 add(problemObj)
//                 break;
//             } else {
//                 subtract(problemObj);
//                 break;
//             }
//         case "add":
//             add(problemObj);
//             break;
        
//         case "sub":
//             subtract(problemObj);
//             break;
        
//         case "multdiv":
//             if (signForOperation >= .5){
//                 multiply(problemObj)
//                 break;
//             } else {
//                 divide(problemObj);
//                 break;
//             }
//         case "mult":
//             multiply(problemObj);
//             break;
        
//         case "div":
//             divide(problemObj);
//             break;    
//         }
//         //Testing out assigning straight to problemObj.problem without the variable
//         // var problem = (num1.toString()+ sign + num2.toString());
//         // problemObj.problem = problem;
//         problemObj.problem = (num1.toString()+ sign + num2.toString());
//         return problemObj;

//     } else {
//          problemObj.num1 = getRandomInt(0, radioValue);
//          problemObj.num2 = getRandomInt(0, radioValue);
//          problemObj.sign = "";
//          problemObj.correctAnswer = "";
//         switch(radioType){
//             case "addsub":
//                 if (signForOperation >= .5){
//                     add(problemObj);
//                     break;
//                 }else{
//                     subtract(problemObj);
//                     break;
//                 }
//             case "add":
//                 add(problemObj);
//                 break;
            
//             case "subtract":
//                 subtract(problemObj);
//                 break;

//             case "multdiv":
//                 if (signForOperation >= .5){
//                     multiply(problemObj);
//                     break;
//                 }else{
//                     divide(problemObj);
//                     break;
//                 }
//             case "mult":
//                 multiply(problemObj);
//                 break;
//             case "divide":
//                 divide(problemObj);
//                 break;
//             }
//             problemObj.problem = (problemObj.num1.toString() + problemObj.sign + problemObj.num2.toString());
//             return problemObj;
//         }
//     }