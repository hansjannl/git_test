const key0 = document.getElementById('0');
const key1 = document.getElementById('1');
const key2 = document.getElementById('2');
const key3 = document.getElementById('3');
const key4 = document.getElementById('4');
const key5 = document.getElementById('5');
const key6 = document.getElementById('6');
const key7 = document.getElementById('7');
const key8 = document.getElementById('8');
const key9 = document.getElementById('9');
const keyDot = document.getElementById('dot');
const keyClear = document.getElementById('clear');
const keyOperate = document.getElementById('operate');
const keyAdd = document.getElementById('add');
const keySubtract = document.getElementById('subtract');
const keyMultiply = document.getElementById('multiply');
const keyDivide = document.getElementById('divide');
const screen = document.getElementById('screen');
const history = document.getElementById('history');

key0.addEventListener("click", function () { newInput(0) });
key1.addEventListener("click", function () { newInput(1) });
key2.addEventListener("click", function () { newInput(2) });
key3.addEventListener("click", function () { newInput(3) });
key4.addEventListener("click", function () { newInput(4) });
key5.addEventListener("click", function () { newInput(5) });
key6.addEventListener("click", function () { newInput(6) });
key7.addEventListener("click", function () { newInput(7) });
key8.addEventListener("click", function () { newInput(8) });
key9.addEventListener("click", function () { newInput(9) });

keyDot.addEventListener("click", function () { newInput(".") });
keyAdd.addEventListener("click", function () { setOperate("add") });
keySubtract.addEventListener("click", function () { setOperate("subtract") });
keyMultiply.addEventListener("click", function () { setOperate("multiply") });
keyDivide.addEventListener("click", function () { setOperate("divide") });
keyOperate.addEventListener("click", function () { operate(selectedOperator, currentInput, secondInput) });
keyClear.addEventListener("click", function () { resetCalculation("",0) });


//base calculator features
function add(first, second) {
    return first += second;
};
function subtract(first, second) {
    return first -= second;
};

function multiply(first, second) {
    return first *= second;
};

function divide(first, second) {
    if(first === 0 && second === 0){
        return "impossible";
    }
    return first /= second;
};

// take input and run calculator
function operate(operator, first, second) {

    switch (operator) {
        case "divide":
            resetCalculation(operator, divide(first, second));
            break;
        case "subtract":
            resetCalculation(operator, subtract(first, second));
            break;
        case "multiply":
            resetCalculation(operator, multiply(first, second));
            break;
        case "divide":
            resetCalculation(operator, divide(first, second));
            break;
    }
}

//take calculator input
let currentInput = 0;
let selectedOperator = 0;
let secondInput = 0;
let previousCalculation = 0;

function resetCalculation(operator, result){
    screen.innerText = result;
    //history.innerText = currentInput + operator + secondInput;
    currentInput = result;
    removeOperatorActive(selectedOperator);

    selectedOperator = 0;
    secondInput = 0;
    previousCalculation = result;
}

function setOperate(operator){
        addOperatorActive(operator);
        removeOperatorActive(selectedOperator);
        selectedOperator = operator;
}

function addOperatorActive(operator){
    switch (operator) {
        case "add":
            document.getElementById("add").classList.add("selected");
            break;
        case "subtract":
            document.getElementById("subtract").classList.add("selected");
            break;
        case "multiply":
            document.getElementById("multiply").classList.add("selected");
            break;
        case "divide":
            document.getElementById("divide").classList.add("selected");
            break;
    }
}

function removeOperatorActive(operator){
    switch (operator) {
        case "add":
            document.getElementById("add").classList.remove("selected");
            break;
        case "subtract":
            document.getElementById("subtract").classList.remove("selected");
            break;
        case "multiply":
            document.getElementById("multiply").classList.remove("selected");
            break;
        case "divide":
            document.getElementById("divide").classList.remove("selected");
            break;
    }
}

function newInput(input) {
    if (selectedOperator === 0) {
        //only runs when no operator is set
        if (currentInput === 0) {
            currentInput = input;
            screen.innerText = currentInput;
        } else if (currentInput > 99999999) {
        } else if (currentInput == "impossible") {
        }else {
            currentInput = `${currentInput}${input}`;
            screen.innerText = currentInput;
        }
    } else {
        if (secondInput === 0) {
            secondInput = input;
            screen.innerText = secondInput;
            removeOperatorActive(selectedOperator);
        } else if (secondInput > 99999999) {
        } else {
            secondInput = `${secondInput}${input}`;
            screen.innerText = secondInput;
            removeOperatorActive(selectedOperator);
        }
    }
}