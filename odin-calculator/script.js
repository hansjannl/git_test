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
const keyClear = document.getElementById('clear');
const keyAdd = document.getElementById('add');
const keySubtract = document.getElementById('subtract');
const keyMultiply = document.getElementById('multiply');
const keyDivide = document.getElementById('divide');


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
    return first /= second;
};

// take input and run calculator
function operate(operator, first, second) {
    switch (operator) {
        case "divide":
            divide(first, second);
            break;
        case "subtract":
            subtract(first, second);
            break;
        case "multiply":
            multiply(first, second);
            break;
        case "divide":
            divide(first, second);
            break;
    }
}