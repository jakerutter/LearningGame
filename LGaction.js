
//TO DO -- add a radio button selection for type of game being played (Math, Words, etc)
        //


//This function is the outermost function.

    function PlayMathGame(){
       if (labelResults.innerHTML != ""){
            resetStyles();
       }
        problemObj = new createMathProblem (0,0,"","",0);
        
        createMathProblem(problemObj);
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
    };


//Functions
function createProblemObj(num1, num2, sign, problem, correctAnswer){
    this.num1 = num1;
    this.num2 = num2;
    this.sign = sign;
    this.problem = problem;
    this.correctAnswer = correctAnswer;
}


function createMathProblem(problemObj) {
   if(problemObj.problem = ""){
    var num1 = Math.floor(Math.random()*10);
    var num2 = Math.floor(Math.random()*10);
    var additionOrSubstraction = Math.random();
    var sign;
    var correctAnswer;

        if (additionOrSubstraction < .5){
            sign = "-";
             num1 = Math.max(num1,num2);
             num2 = Math.min(num1,num2);
            if(num1 === num2){
                num1 += Math.floor(Math.random()*3);
            }
        }
        if (additionOrSubstraction >= .5){
            sign = "+";
        }
        
        var problem = (num1.toString()+ sign + num2.toString());
        problemObj.num1 = num1;
        problemObj.num2 = num2;
        problemObj.sign = sign;
        problemObj.problem = problem;
    } else {
         num1 = Math.floor(Math.random()*10);
         num2 = Math.floor(Math.random()*10);
         additionOrSubstraction = Math.random();
         sign = "";
         correctAnswer;
    
            if (additionOrSubstraction < .5){
                sign = "-";
                 num1 = Math.max(num1,num2);
                 num2 = Math.min(num1,num2);
                if(num1 === num2){
                    num1 += Math.floor(Math.random()*3);
                }
            }
            if (additionOrSubstraction >= .5){
                sign = "+";
            }
            
                problem = (num1.toString()+ sign + num2.toString());
            problemObj.num1 = num1;
            problemObj.num2 = num2;
            problemObj.sign = sign;
            problemObj.problem = problem;
    }
        //Populate the correct answer value
        if (problemObj.sign == "+"){
            correctAnswer = Number(problemObj.num1+problemObj.num2);
    }
    else{
        if (problemObj.num1 > problemObj.num2){ 
            correctAnswer = Number(problemObj.num1-problemObj.num2);
        }
        else {
            correctAnswer = Number(problemObj.num2-problemObj.num1);
        }
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
    if (selectedAnswer == problemObj.correctAnswer){
        document.getElementById("labelResults").innerHTML = "You are correct!";
        correctCount += 1;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('correctAnswer');
        
    }
    else {
        document.getElementById("labelResults").innerHTML = "Please try again.";
        correctCount = 0;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('wrongAnswer');
    }
    
}

function removeBinding(){
    $("#Top").off('click');
    $("#Left").off('click');
    $("#Right").off('click');
    $("#Bottom").off('click');
}

function resetStyles(){
    if((document.getElementById('Top')).classList.contains('correctAnswer')) {
        document.getElementById('Top').classList.remove('correctAnswer');
    }
    if(document.getElementById('Top').classList.contains('wrongAnswer')) {
        document.getElementById('Top').classList.remove('wrongAnswer');
    }
    if(document.getElementById('Left').classList.contains('correctAnswer')) {
        document.getElementById('Left').classList.remove('correctAnswer');
    }
    if(document.getElementById('Left').classList.contains('wrongAnswer')) {
        document.getElementById('Left').classList.remove('wrongAnswer');
    }
    if(document.getElementById('Right').classList.contains('correctAnswer')) {
        document.getElementById('Right').classList.remove('correctAnswer');
    }
    if(document.getElementById('Right').classList.contains('wrongAnswer')) {
        document.getElementById('Right').classList.remove('wrongAnswer');
    }
    if(document.getElementById('Bottom').classList.contains('correctAnswer')) {
        document.getElementById('Bottom').classList.remove('correctAnswer');
    }
    if(document.getElementById('Bottom').classList.contains('wrongAnswer')) {
        document.getElementById('Bottom').classList.remove('wrongAnswer');
    }

    };
   


