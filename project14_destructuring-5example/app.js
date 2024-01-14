
//------------------EXAMPLE 1------------------
//SwAP THE VALUE OF TWO VARIABLE

let a = 1;
let b = 2;

[a,b] = [b,a];
console.log(a); //2
console.log(b); //1

//------------------EXAMPLE 2------------------
//SwAP 2 ELEMENT IN AN ARRAY
const colors = ["red", "green", "blue", "yellow", "white"];
[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors); 

//------------------EXAMPLE 3------------------
//SwAP 2 ELEMENT IN VARIABLE

const colors1 = ["red", "green", "blue", "yellow", "white"];

const [firstColor, secondColor,thirdColor, ...extractColor] = colors1;

console.log(firstColor); //red
console.log(secondColor); //green
console.log(thirdColor); //blue
console.log(extractColor); // ['yellow', 'white']

//------------------EXAMPLE 4------------------
//GET ITEM IN OBJECT

const person1 = {
    firstName: 'John',
    lastName: 'Cale',
    age: 21,
    isEmployee: true,
    job:"Developer"
}

const person2 = {
    firstName: 'John',
    lastName: 'Cale',
    age: 21,
    isEmployee: true,
}

const {firstName, lastName, age, isEmployee, job="Teacher"} = person2;
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(isEmployee);
console.log(job);