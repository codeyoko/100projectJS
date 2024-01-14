
// RANDOM PASSWORD GENERATOR

const passwordLength = 12;
const includeLowerCase = true;
const includeUpperCase = true;
const includeNumber = true;
const includeSymbols = true;

function generatePassword(length, includeLowerCase, includeUpperCase, includeNumber, includeSymbols) {
    
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%&'()*+,-./:;<=>?>";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowerCaseChars : "";
    allowedChars += includeUpperCase ? upperCaseChars : "";
    allowedChars += includeNumber ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
    
    //console.log(allowedChars);

    //check length
    if(length <= 0){
        return `password length must be at least 1`;
    }
    //chek allowed
    if(allowedChars.length === 0){
        return `At least 1 set of character needs to be selected`;
    }
    //random password generate
    for(let i = 1; i <= length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    return password;


}

const password = generatePassword(passwordLength,
                                  includeLowerCase, 
                                  includeUpperCase, 
                                  includeNumber, 
                                  includeSymbols);
console.log(password);