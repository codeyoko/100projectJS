

//map()
const number = [1,2,3,4,5];

function square(element) {
    return Math.pow(element, 2);
}

const squares = number.map(square);
console.log(squares);

//uppercase
const usernames =["phung","nguyen","hoang"];

function upperCase(element) {
    return element.toUpperCase();
}

const userUpperCase = usernames.map(upperCase);
console.log(userUpperCase);

//formatData
const dates = ["2023-1-30","2024-3-23","2025-4-23","2026-5-23"];

function formatDate(element){
    const parts = element.split("-"); //tach theo -
    return `${parts[0]}/${parts[1]}/${parts[2]}`;
}

const formatDates = dates.map(formatDate);
console.log(formatDates);

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

//filter
const a = [1,2,3,4,5,6,7,8];

function isEven(element) {
    return element % 2 === 0;
}

function isOdd(element) {
    return element % 2 !== 0;
}
const a1 = a.filter(isEven);
const a2 = a.filter(isOdd);
console.log(a1);
console.log(a2);