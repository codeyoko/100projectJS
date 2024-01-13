
//counter program

const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

let count = 0;
const countLable = document.getElementById("countLabel");

increaseBtn.onclick = function() {
    count++;
    countLable.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function() {
    count = 0;
    countLable.textContent = count;
}