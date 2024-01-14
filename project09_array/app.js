

let fruit = ["orange","apple", "banana","mango","piman"];

fruit.push("coconut");  // add last itme
fruit.pop(); // get last item
fruit.unshift("mango"); // add first item
fruit.shift(); // get first item

fruit.map((item, index) => {
    console.log(item);
})

//for increase
console.log("for loop increase:")
for(let i = 0; i < fruit.length; i++){
    console.log(fruit[i]);
}
//for decrease
console.log("for loop decrease:")
for(let i= fruit.length - 1; i >= 0; i--){
    console.log(fruit[i]);
}

//for of
console.log("for loop of:")
for(let item of fruit){
    console.log(item);
}

//sort increaase
fruit.sort();
console.log("fruit sort increase:")
for(let item of fruit){
    console.log(item);
}
//sort decrease
fruit.sort().reverse();
console.log("fruit sort decrease:")
for(let item of fruit){
    console.log(item);
}

