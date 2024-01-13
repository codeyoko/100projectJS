

let username = "Phung";

console.log(username.charAt(0)); // lay vi tri index
console.log(username.indexOf('g')); // lay vi tri index

console.log(username.startsWith(" ")); // tra ve vi tri dau

let phoneNUmber = "123-456-789";
phoneNUmber = phoneNUmber.replaceAll("-", "");
console.log(phoneNUmber);

//slice

let email = "phung@gmail.com";
let user = email.slice(0, email.lastIndexOf("@"));
console.log(user);


// get username

let userName = window.prompt("Enter your username: ");
userName = userName.trim(); //cat khoang trang
let userNameArr = userName.split(" ");
userNameArr = userNameArr.filter(item => {
        if (item !== " ")
            return item;
    })
userName = userNameArr.join(" ");

let letter = userName.charAt(0);
letter = letter.toLowerCase();

let extraChars = userName.slice(1); // lay tu vi tri so 1
extraChars = extraChars.toLowerCase();
userName = letter + extraChars;      
console.log(userName); 