

//This function is the outermost function.
function PlayMathGame(){
    if (currentGoal.innerHTML == ""){
        preGame();
    }
        var returnBool;

       if (labelResults.innerHTML != ""){
           var didBoolReturn = resetStyles(returnBool); 
       }
       if (labelResults.innerHTML == "" || didBoolReturn){
        if (document.getElementById('correctCounter') > 0){
            var currentScore = document.getElementById('correctCounter').value;
        }
        
        problemObj = new createMathProblem(0,0,"","",0,"");
        
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
    this.variable = variable;
    }
//Takes problem obj and calls the appropriate Math Function
function createMathProblem(problemObj) {
    var radioValue = $("input[name='problemSize']:checked").val();
    var radioType = $("input[name='problemType']:checked").val();
    var radioStyle = $("input[name='problemStyle']:checked").val();
 if (radioStyle == "Answer"){
   if (problemObj.problem = ""){
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

    } else {
        if (problemObj.problem = ""){
            var num1 = getRandomInt(0, radioValue);
            var num2 = getRandomInt(0, radioValue);
            var sign;
            var correctAnswer;
            var variableArray = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
            var randomIndex = Math.floor(Math.random() * variableArray.length);
            var variable = variableArray[randomIndex];
           
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
                 
                // var problem = (num1.toString()+" "+ sign +" "+ variable);
                problemObj.num1 = num1;
                problemObj.num2 = num2;
                problemObj.sign = sign;
                problemObj.problem = problem;
                problemObj.variable = variable;
        
            } else {
        
                 num1 = getRandomInt(0, radioValue);
                 num2 = getRandomInt(0, radioValue);
                 sign = "";
                 correctAnswer;
                 variable;
                 variableArray = ["a","b","c","d","e","f","g","h","i","j","k","m","n","p","q","r","s","t","u","v","w","x","y","z"];
                 randomIndex = Math.floor(Math.random()* variableArray.length);
                 variable = variableArray[randomIndex];

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
                     
                    // problem = (num1.toString()+" "+ sign +" "+ variable);
                    problemObj.num1 = num1;
                    problemObj.num2 = num2;
                    problemObj.sign = sign;
                    problemObj.problem = problem;
                    problemObj.variable = variable;
                }
        }       
        return problemObj;
    }


//Populate the correct answer value
function determineAnswer(problemObj){
    var radioStyle = $("input[name='problemStyle']:checked").val();
    var correctAnswer = "";
    if (radioStyle == "Answer") {
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
    else {
        if (problemObj.sign == "+") {
            var standardAnswer = Number(problemObj.num1 + problemObj.num2);
            problem = (problemObj.num1.toString()+" "+ problemObj.sign +" "+ problemObj.variable +" = "+ standardAnswer.toString());
            problemObj.problem = problem;
            correctAnswer = Number(standardAnswer - problemObj.num1);
        }
        if (problemObj.sign == "-"){
            var standardAnswer = Number(problemObj.num1 - problemObj.num2);
            problem = (problemObj.num1.toString()+" "+ problemObj.sign +" "+ problemObj.variable +" = "+ standardAnswer.toString());
            problemObj.problem = problem;
            correctAnswer = Number(problemObj.num1 - standardAnswer);
        }
        if (problemObj.sign == "*"){
            var standardAnswer = Number(problemObj.num1 * problemObj.num2);
            problem = (problemObj.num1.toString()+" "+ problemObj.sign +" "+ problemObj.variable +" = "+ standardAnswer.toString());
            problemObj.problem = problem;
            correctAnswer = Number(standardAnswer / problemObj.num1);
        }
        if (problemObj.sign == "/"){
            var standardAnswer = Number(problemObj.num1 / problemObj.num2);
            problem = (problemObj.num1.toString()+" "+ problemObj.sign +" "+ problemObj.variable +" = "+ standardAnswer.toString());
            problemObj.problem = problem;
            correctAnswer = Number(standardAnswer * problemObj.num2);
        }
        problemObj.correctAnswer = correctAnswer;
    
        return problemObj;
    }
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
    var currentGoal = parseInt($('#currentGoal').text());

    if (selectedAnswer == problemObj.correctAnswer){
        document.getElementById("labelResults").innerHTML = "You are correct!";
        correctCount += 1;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('correctAnswer');
        globalCorrect += 1;
        document.getElementById('globalCorrect').innerHTML = globalCorrect;
        var isCorrect = true;
        getAnsweredSound(isCorrect);
    }
    else {
        document.getElementById("labelResults").innerHTML = "Please try again.";
        correctCount = 0;
        document.getElementById("correctCounter").innerHTML = correctCount.toString();
        document.getElementById("correctCounterLabel").innerHTML = ("Current streak is: " + correctCount);
        document.getElementById(selection.id).classList.add('wrongAnswer');
        var isCorrect = false;
        getAnsweredSound(isCorrect);
        document.getElementById("listWrongAnswers").innerHTML += (problemObj.problem + " ");
    }

    questionsAnswered += 1;
    document.getElementById('questionsAnswered').innerHTML = questionsAnswered.toString();
    percentCorrect = (globalCorrect/questionsAnswered)*100;
    document.getElementById('globalCorrect').innerHTML = globalCorrect.toString();
    document.getElementById('percentCorrect').innerHTML = percentCorrect.toFixed(2) + "%";
    document.getElementById('totalCorrect').innerHTML = globalCorrect.toString();
    document.getElementById('totalAnswered').innerHTML = questionsAnswered;
    changeStyling(percentCorrect, questionsAnswered);
    trackProgress(currentGoal, questionsAnswered);
    if (questionsAnswered >= currentGoal){
        goalMet(globalCorrect, currentGoal, percentCorrect, questionsAnswered);
        }
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

function preGame() {
    document.getElementById('welcomeModal').classList.remove('hidden');
    $("#welcomeModal").modal();

    var goal;
    loop();

    function loop(){
        if ($("input[name='goalValue']:checked").length > 0) {
            goal = $("input[name='goalValue']:checked").val();
        }
        else{
            setTimeout(loop, 1000);   
        }
      currentGoal.innerHTML = goal;
    }
}

function hideWelcomeModal(name) {
    if (currentGoal.innerHTML != ""){
    document.getElementById('welcomeModal').classList.add('hidden');
    document.getElementById('welcomeModal').classList.add('behind');
    document.getElementById('simplemodal-overlay').classList.add('behind');
    document.getElementById('simplemodal-container').classList.add('behind');
    }
}

function goalMet(globalCorrect, currentGoal, percentCorrect, questionsAnswered){
    if (currentGoal != "None"){
        var questionsAnswered = document.getElementById('questionsAnswered').innerHTML;
            if (questionsAnswered >= currentGoal) {
                var status =  percentCorrect >= 75 ? "passed" : "failed";
                getFinishedSound(status)
                showFinishedModal(globalCorrect, currentGoal, percentCorrect);
                }
            }
        }

function showFinishedModal(globalCorrect, currentGoal, percentCorrect){
    var questionsAnswered = document.getElementById('questionsAnswered').innerHTML;
    document.getElementById('finishedModal').classList.remove('hidden');
    $("#finishedModal").modal();
    if (percentCorrect >= 85){
        document.getElementById('finishedModal').classList.add("finishedGood");
        document.getElementById('finishedResult').innerHTML = ("PASSED with flying colors!");

    }
    if (percentCorrect < 85 && percentCorrect >= 75){
        document.getElementById('finishedModal').classList.add("finishedFair");
        document.getElementById('finishedResult').innerHTML = ("You passed with a fair grade.");
    }
    if (percentCorrect < 75){
        document.getElementById('finishedModal').classList.add("finishedPoor");
        document.getElementById('finishedResult').innerHTML = ("Please try again. Your score was too low to pass.")
    }
    document.getElementById('EndMessageGoalSet').innerHTML = ("The goal you set was "+ currentGoal + ".");
    document.getElementById('EndMessageTotalAnswered').innerHTML = ("You answered "+ globalCorrect + " correct out of " + questionsAnswered + " attempted.");
    document.getElementById('EndMessagePercentCorrect').innerHTML = ("You finished with "+ percentCorrect.toFixed(2) + "% correct.")

    exit();

    function exit(){
        if (getElementById('finishedModal').classList.contains('hidden')) {
            setTimeout(exit, 1000);   
        }
        else{
            hideFinishedModal();   
        }
    }
}

function hideFinishedModal(){
    if (currentGoal.innerHTML != ""){
        document.getElementById('finishedModal').classList.add('hidden');
        document.getElementById('finishedModal').classList.add('behind');
        document.getElementById('simplemodal-overlay').classList.add('behind');
        document.getElementById('simplemodal-container').classList.add('behind');
        window.location.reload(true);
    }
}

function changeStyling(percentCorrect, questionsAnswered) {

    if (percentCorrect >= 85){
        if (document.getElementById('percentCorrect').classList.contains('doingPoor')) {
            document.getElementById('percentCorrect').classList.remove('doingPoor');
        }
        if (document.getElementById('percentCorrect').classList.contains('doingFair')) {
            document.getElementById('percentCorrect').classList.remove('doingFair');
        }
            document.getElementById('percentCorrect').classList.add('doingGood');
    }
    if (percentCorrect <85 && percentCorrect >= 75){
        if (document.getElementById('percentCorrect').classList.contains('doingPoor')) {
            document.getElementById('percentCorrect').classList.remove('doingPoor');
        }
        if (document.getElementById('percentCorrect').classList.contains('doingGood')) {
            document.getElementById('percentCorrect').classList.remove('doingGood');
        }
            document.getElementById('percentCorrect').classList.add('doingFair');
    }
    if (percentCorrect < 75){
        if (document.getElementById('percentCorrect').classList.contains('doingGood')) {
            document.getElementById('percentCorrect').classList.remove('doingGood');
        }
        if (document.getElementById('percentCorrect').classList.contains('doingFair')) {
            document.getElementById('percentCorrect').classList.remove('doingFair');
        }
            document.getElementById('percentCorrect').classList.add('doingPoor');
    }
}

//retrieve appropriate sound when game is completed.
function getFinishedSound(status) {
    var soundList = [1,2,3];
    var chosenSound = soundList[Math.floor(Math.random() * soundList.length)];
    if (status == "passed"){
        if (chosenSound == 1){
            document.getElementById('congrats1').play();
        }
        if (chosenSound == 2){
            document.getElementById('congrats2').play();
        }
        if (chosenSound == 3){
            document.getElementById('congrats3').play();
        }
    } else {
        if (chosenSound == 1){
            document.getElementById('failed1').play();
        }
        if (chosenSound == 2){
            document.getElementById('failed2').play();
        }
        if (chosenSound == 3){
            document.getElementById('failed3').play();
        }
        
    }
}

function getAnsweredSound(isCorrect) {
    if (isCorrect == true) {
        document.getElementById('correctSound').play();
    }
    else {
        document.getElementById('wrongSound').play();
    }
}
//retrieve sound when a question is answered

//Function will take the currentGoal and questionsAnswered values as parameters and 
//use these values to update and style a progression chart displayed on the page.
function trackProgress(currentGoal, questionsAnswered) {
    
    var status = currentStatus();

    if (currentGoal != "None") {
        
        var progress = questionsAnswered / currentGoal * 100;
        var bodyColor;

        if (status == "good") {
            bodyColor = "green";
            $('#percentCorrect').removeClass("doingPoor");
            $('#percentCorrect').removeClass("doingfair");
            $('#percentCorrect').addClass("doingGood");
            document.body.style.background = "-webkit-linear-gradient(bottom, "+ bodyColor +" "+ progress +"%, white 100%)";
    }
        if (status == "fair") {
            bodyColor = "white";
            $('#percentCorrect').removeClass("doingPoor");
            $('#percentCorrect').removeClass("doingGood");
            $('#percentCorrect').addClass("doingFair");
            document.body.style.background = "-webkit-linear-gradient(bottom, "+ bodyColor+ " "+progress +"%, white 100%)";
        }
        if (status == "poor") {
            bodyColor = "red";
            $('#percentCorrect').removeClass("doingGood");
            $('#percentCorrect').removeClass("doingFair");
            $('#percentCorrect').addClass("doingPoor");
            document.body.style.background = "-webkit-linear-gradient(bottom, "+ bodyColor+ " "+progress +"%, white 100%)";
            }
        }
    }

//This function will take in the gloabalAnswered and the globalCorrect and return
//the current status of the user's performance. Statuses are good, fair, poor.
function currentStatus() {
    var percentCorrect = parseInt($('#percentCorrect').text());

    if (percentCorrect >= 85){
        status = "good";
    }
    if (percentCorrect < 85 && percentCorrect >= 75){
       status = "fair";
    }
    if (percentCorrect < 75){
        status = "poor";    
        }
        return status;
    }