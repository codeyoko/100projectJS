
const myBox = document.querySelector(".click");

/*
function changeColor(event) {
    // myBox.classList.remove("click");
    // myBox.classList.add("box1");

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! :))";
} 

*/

myBox.addEventListener("click", (event) =>  {
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH!";
});

myBox.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "red";

})

myBox.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "lightgreen";
    
})

///// show-hide

const myImg = document.getElementById("myImg");
const myBtn = document.getElementById("myBtn");

myBtn.addEventListener("click", (event) => {

        if(myImg.style.display === "none"){
            myImg.style.display = "block";
            myBtn.textContent = "Hide";
        }else{
            myImg.style.display = "none";
            myBtn.textContent = "Show";
        }
})