
let numbers = [1,2,3,4,5];
let maximum = Math.max(...numbers); // copy and return new array
let miximum = Math.min(...numbers); // copy and return new array

console.log(maximum);
console.log(miximum);

//tach mang
let username = "phung van son";
let letters = [...username]; //copy and return new array

console.log(letters);
console.log(letters.length);

//copy 2 arry

let fruits = ["apple", "banana", "orange"];
let vegetables = ["carrots", "celery", "potatoes"];

let foods = [...fruits, ...vegetables]; //copy

console.log(foods);


//function

function openFridge(...foodss) {

    return foodss(...foodss); // (6) ['apple', 'banana', 'orange', 'carrots', 'celery', 'potatoes']
}

const food1 = "pizza";
const food2 = "humburger";
const food3 = "hotdog";
const food4 = "sushi";
const food5 = "ramen";

openFridge(food1, food2, food3, food4, food5);