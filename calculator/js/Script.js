function addition(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 + number2;


    document.getElementById("result").value= result;
}


function Substract(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 - number2;


    document.getElementById("result").value= result;
}

function multiply(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 * number2;


    document.getElementById("result").value= result;
}


function Division(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = number1 / number2;


    document.getElementById("result").value= result;
}

function Square(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    let result = Math.sqrt(number1, )


    document.getElementById("result").value= result;
}