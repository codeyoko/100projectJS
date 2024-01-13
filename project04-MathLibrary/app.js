
// Math Library
let x = 3.54;
let y = 2;
let z = 1;

console.log(Math.round(x)); // lam tron 0.3 -> 0 :  0,6-> 1
console.log(Math.floor(x)); // lam tron xuong
console.log(Math.ceil(x)); // lam tron len
console.log(Math.trunc(x)); // lam tron xuong

let max1 = Math.max(x,y,z);
console.log(max1);

let min1 = Math.min(x,y,z);
console.log(min1);




// RANDOM NUMBER GENERATE
let randomNumber1 = Math.floor(Math.random() * 100);
console.log(randomNumber1);


//random
const max = 10;
const min = 1;

const rollButton = document.getElementById("rollButton");

const rollLable1 = document.getElementById("rollLable1");
const rollLable2 = document.getElementById("rollLable2");
const rollLable3 = document.getElementById("rollLable3");
const rollLable4 = document.getElementById("rollLable4");


rollButton.onclick = function() {
    let randomNumber1 = Math.floor(Math.random() * max) + min;
    let randomNumber2 = Math.floor(Math.random() * max) + min;
    let randomNumber3 = Math.floor(Math.random() * max) + min;
    let randomNumber4 = Math.floor(Math.random() * max) + min;
    rollLable1.textContent = randomNumber1;
    rollLable2.textContent = randomNumber2;
    rollLable3.textContent = randomNumber3;
    rollLable4.textContent = randomNumber4;
}
