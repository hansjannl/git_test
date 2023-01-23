let addContent = document.createElement('p');
addContent.style.color = "red";
addContent.textContent = "Hello Worlds";

let addH3 = document.createElement('h3');
addH3.textContent = "Geitje";
addH3.style.color = "blue";

let addDiv = document.createElement('div');
let addDivH1 = document.createElement('h1');
addDivH1.textContent = "I'm in a div";
let addDivP = document.createElement('p');
addDivP.textContent = "me too!";

addDiv.appendChild(addDivH1);
addDiv.appendChild(addDivP);


document.body.appendChild(addContent);
document.body.appendChild(addH3);
document.body.appendChild(addDiv);


function createContent(btns){
    let addContent1 = document.createElement('p');
addContent1.style.color = "red";
document.body.appendChild(addContent1);

}

const btns = document.querySelectorAll('button');
btns.forEach(createContent());
// btn.addEventListener('click', function (e) {
//     createContent(e);
// })