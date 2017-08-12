


$(document).ready(function(){
    $("#middleMiddle").click(function(){
        
        createMathProblem();
    })
})





//Functions
function createMathProblem() {
    var num1 = Math.floor(Math.random()*5);
    var num2 = Math.floor(Math.random()*5);
    var additionOrSubstraction = Math.random();
    var sign;
    var signage;

        if (additionOrSubstraction < .5){
            sign = "-";
            signage = "minus";
        }
        else {
            sign = "+";
            signage = "plus";
        }
        
        if (signage = "minus") {
            var num1 = Math.max(num1,num2);
            var num2 = Math.min(num1,num2);
            if(num1 == num2){
                num1 += Math.floor(Math.random()*3);
            }
        }
        var problem = (num1.toString()+ sign + num2.toString());
        
        populateMathProblem(problem);
        populateAnswers(num1,sign,num2);
}


//Function that will take the generated math problem and place it
//into the questionArea span
function populateMathProblem(problem){
    var span = document.getElementById("middleMiddle");
    if(span.firstChild) {
        span.removeChild(span.firstChild);

        span.appendChild(document.createTextNode(problem.toString()) );
            }
    else {
        span.appendChild(document.createTextNode(problem.toString()));
    }
}

function populateAnswers(num1,sign,num2){
    var myAnswersArray = [];
    if (sign == "+"){
        var answer1 = Number(num1+num2);
    }
    else{
        if (num1 > num2){ 
            var answer1 = Number(num1-num2);
        }
        else {
            var answer1 = Number(num2-num1);
        }
    }
    var answer2 = answer1 + 1;
    var answer3 = answer1 + 2;
    var answer4 = answer1 + 3;
    var answer5 = answer1 + 4;

    myAnswersArray = [answer2, answer3, answer4, answer5];

    if (answer1 >= 1){
        var answer6 = answer1 - 1;
        myAnswersArray.push(answer6);
    }
    if (answer1 >= 2){
        var answer7 = answer1 - 2;
        myAnswersArray.push(answer7);
    }
    if (answer1 >= 3){
        var answer8 = answer1 - 3;
        myAnswersArray.push(answer8);
    }
    if (answer1 >= 4){
        var answer9 = answer1 - 4;
        myAnswersArray.push(answer9);
    }
    
    var mySpanArray = [];

    var span1 = document.getElementById("middleTop");
    var span2 = document.getElementById("leftMiddle");
    var span3 = document.getElementById("rightMiddle");
    var span4 = document.getElementById("middleBottom");
    
    //Select one of the 4 locations to hold the correct answer.
    mySpanArray = [span1, span2, span3, span4];
    var correctAnswerLocation = mySpanArray[Math.floor(Math.random()* mySpanArray.length)];
    if(correctAnswerLocation.firstChild) {
        correctAnswerLocation.removeChild(correctAnswerLocation.firstChild);

        correctAnswerLocation.appendChild(document.createTextNode(answer1.toString()) );
            }
    else {
        correctAnswerLocation.appendChild(document.createTextNode(answer1.toString()));
    }

    var spanIndex1 = mySpanArray.indexOf(correctAnswerLocation);
    if (spanIndex1 > -1) {
        mySpanArray.splice(spanIndex1, 1);
    }

    //Here are the random options that will get plugged into the remaining answer locations.
    var spanIndex2 = mySpanArray[Math.floor(Math.random()* mySpanArray.length)];
    var rand1 = myAnswersArray[Math.floor(Math.random() * (myAnswersArray.length-1))];

    if(spanIndex2.firstChild) {
        spanIndex2.removeChild(spanIndex2.firstChild);

        spanIndex2.appendChild(document.createTextNode(rand1.toString()) );
            }
    else {
        spanIndex2.appendChild(document.createTextNode(rand1.toString()));
    }

    if (spanIndex2 > -1) {
        mySpanArray.splice(spanIndex2, 1);
    }
        //This part removes the random index that was selected from the array so
        //there are not duplicate answers.
        var index1 = myAnswersArray.indexOf(rand1);
        if (index1 > -1) {
            myAnswersArray.splice(index1, 1);
        }
     
    var spanIndex3 = mySpanArray[Math.floor(Math.random()* mySpanArray.length)];
    var rand2 = myAnswersArray[Math.floor(Math.random() * myAnswersArray.length)];

    if(spanIndex3.firstChild) {
        spanIndex3.removeChild(spanIndex3.firstChild);

        spanIndex3.appendChild(document.createTextNode(rand2.toString()) );
            }
    else {
        spanIndex3.appendChild(document.createTextNode(rand2.toString()));
    }

    if (spanIndex3 > -1) {
        mySpanArray.splice(spanIndex3, 1);
    }
     //This part removes the random index that was selected from the array so
        //there are not duplicate answers.
        var index2 = myAnswersArray.indexOf(rand2);
        if (index2 > -1) {
            myAnswersArray.splice(index2, 1);
        }

    var spanIndex4 = mySpanArray[Math.floor(Math.random()* mySpanArray.length)];
    var rand3 = myAnswersArray[Math.floor(Math.random() * myAnswersArray.length)];

    if(spanIndex4.firstChild) {
        spanIndex4.removeChild(spanIndex4.firstChild);

        spanIndex4.appendChild(document.createTextNode(rand3.toString()) );
            }
    else {
        span3.appendChild(document.createTextNode(rand3.toString()));
    }

     //This part removes the random index that was selected from the array so
        //there are not duplicate answers.
        var index3 = myAnswersArray.indexOf(rand3);
        if (index3 > -1) {
            myAnswersArray.splice(index3, 1);
        }
    
        if (spanIndex4 > -1) {
        mySpanArray.splice(spanIndex4, 1);
    }

}
