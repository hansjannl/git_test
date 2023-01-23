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

//const promptName = prompt("your name!");

//lastLetter(promptName);

// for (let i = 0; i<=10; i++){
//     if(i%2 === 0){
//         console.log(i);
//     }
// }

//  let i = 0;
//  while(i < 3){
//     console.log(i);
//     i++;
//  };

// let num;

// do {
//     num = prompt("enter a number greater than 100?", 0);
// } while (num <= 100 && num);

let n = 10;

for(let i = 2; i <= n; i++){
    if(n%i != 0){
        console.log(i);
    }
}