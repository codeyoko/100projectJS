
const myH1 = document.getElementById('myH1');
myH1.style.backgroundColor ="red";
myH1.style.textAlign = "center";
console.log(myH1);


const vegetables = document.querySelectorAll("li");
console.log(vegetables);
vegetables.forEach(item => {
    item.style.backgroundColor ="pink";
})


//.firstElementChiled
//.lastElementChiled
//.nextElementSibling
//.previousElementSibling
//.parentElement
//.children
const element = document.querySelector("#vegetables");
const ulElement = document.querySelectorAll("ul");

ulElement.forEach(item => {

    //.firstElementChiled
    const firstChild = item.firstElementChild;
    firstChild.style.color = "red";

    //nextElementSibling
    const nextSibling = firstChild.nextElementSibling;
    nextSibling.style.color = "purple";

    //.lastElementChiled
    const lastChild = item.lastElementChild;
    lastChild.style.color = "white"
})
