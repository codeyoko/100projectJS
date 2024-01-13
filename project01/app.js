//window.alert("Hello");

let funllName = "Phung Van Viet";
let age = 30;
let country = "VN";
let isStudent = false;
/*
document.getElementById('p1').textContent = `Your name is ${funllName}`;
document.getElementById('p2').innerText = `Your age is ${age}`;
document.getElementById('p3').innerText = `Your is student ?  ${isStudent}`;

*/

//username = window.prompt("What is your username?");
//console.log(username);
document.getElementById("mySubmit").onclick = function() {
    let username = document.getElementById("username").value;
    document.getElementById("h1-user-name").textContent = `Welcome :${username}`;
}