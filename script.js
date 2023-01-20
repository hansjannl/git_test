const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener('change', setWeather);

function setWeather (){
    const choice = select.value;

    switch (choice) {
        case "sunny":
            para.textContent = "Sunny!";
            break;
        case "rainy":
            para.textContent = "RAIN!";
            break;
        case "snowing":
            para.textContent = "SNOWING OMG";
            showMessage();
            break;
        case "overcast":
            para.textContent = "bit muggy today innit";
            break;
        default:
            para.textContent = "select content";
    }
};


//functions

function showMessage() {
    alert("hello everyone");
};

 function add7(number){
return number + 7;
 };

function multiply(number1, number2) {
return number1, number2;
}

function lastLetter(input){
    console.log(input.slice(-1));
}

const promptName = prompt("your name!");

lastLetter(promptName);