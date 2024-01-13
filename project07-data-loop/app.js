
let loggedIn = false;
let username;
let password;
/*
while(!loggedIn) {

    username = window.prompt("Enter your username:");
    password = window.prompt("Enter your password:");

    if(username === "phung" && password ==="123") {
        loggedIn = true;
        console.log("You are loggin in!");

    }else{
        console.log("Invalid credentials! Please try again.");
    }
}

*/

// Number guess game

const minNumber = 1;
const maxNumber = 10;
let answer = Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
let gess;
let attempts = 0;
let running = true;

console.log(answer);
while(running){

    gess = window.prompt(`Guess a number between ${minNumber} - ${maxNumber}`);
    gess = Number(gess);

    //数字でない場合
    if(isNaN(gess)){
        window.alert("Please enter a valid number");
    }else if(gess < minNumber || gess > maxNumber){
        window.alert(`Please enter a valid number between ${minNumber} - ${maxNumber}`);
    }else{
        attempts++; 
        if(gess > answer){
            window.alert("TOO HIGHT! TRY AGEN!");
        }else if(gess < answer){
            window.alert("TOO LOW! TRY AGEN!");
        }else{
            window.alert(`CORRECT! The answer was ${answer}.It took you :${attempts}`);
            running = false;
        }

        if(attempts === 5){
            window.alert(`You turn is over!!!`);
            running = false;
        }
    }

}
