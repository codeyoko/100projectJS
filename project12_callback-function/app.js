//callback function

function hello() {

    setTimeout(() => {
        console.log('hello');
    },2000);
    
}
hello();

// array.forEach(callback)

let fruit = ["apple", "orange", "banana"];

function upperCase(element, index, array){
    array[index] = element.toUpperCase();
}


function capitalize(element, index, array){

    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
    //Apple
    //Oragne
    //Banana
}
function display(element) {
    console.log(element);
}
fruit.forEach(capitalize);
fruit.forEach(display);
