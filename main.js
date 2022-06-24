function send(){
    factor1 = document.getElementById('factor1');
    factor2 = document.getElementById('factor2');
    actualAnswer = parseInt(factor1) * parseInt(factor2);
    questionNumber = "<h4>" + factor1.value + " X " + factor2.value + "</h4>";
    inputBox = "<br>Answer: <input type='text' id='input_box'>"
    checkButton = "<br><br><button class='btn btn-info' onclick='checkAnswer()'>Check</button>";
    row = questionNumber + inputBox + checkButton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("factor1").innerHTML = "";
    document.getElementById("factor2").innerHTML = "";
}
function checkAnswer(){
    
}