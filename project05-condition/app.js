
const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn =  document.getElementById("payPalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentsResult = document.getElementById("paymentsResult");

mySubmit.onclick = function() {

    myCheckbox.checked ? 
        subResult.textContent = `You are subscribed!` : 
        subResult.textContent = `You are not subscribed!`;

    if(visaBtn.checked){
        paymentsResult.textContent = `You are paying with Visa`;
    }else if(masterCardBtn.checked) {
        paymentsResult.textContent = `You are paying with MasterCard`;
    }else if(payPalBtn.checked) {
        paymentsResult.textContent = `You are paying with PayPal`;
    }
    else{
        paymentsResult.textContent = `You must select payment type.  Please!`;
    }
        
    
}