function multiply(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let answer = number1 * number2;
    document.getElementById("outputS2").innerHTML = answer;
}


function divide(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let answer = number1 / number2;
    document.getElementById("outputS2").innerHTML = answer;
}

function add(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value;
    let answer = parseInt(number1) + parseInt(number2);
    document.getElementById("outputS2").innerHTML = answer;
}

function subtract(){
    let number1 = document.getElementById("num1").value;
    let number2 = document.getElementById("num2").value; 
    let answer = number1 - number2;
    document.getElementById("outputS2").innerHTML = answer;
}