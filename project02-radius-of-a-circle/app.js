

const PI = 3.14159;

document.getElementById("mySubmit").onclick = function() {
    let radius = document.getElementById("radius").value;
    radius = Number(radius);
    let circumference = 2 * PI * radius;
    console.log(circumference);
    document.querySelector(".result").textContent = circumference + "cm";

}