
const temperature = document.getElementById("temperature");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const convertResult = document.getElementById("convertResult");


function convert(){
    let temp;

    if(toFahrenheit.checked){
        temp = Number(temperature.value);
        temp = temp * 9 / 5 + 32;
        convertResult.textContent = `${temp}・F`;


    }else if(toCelsius.checked) {
        temp = Number(temperature.value);
        temp = (temp -32) * (5 / 9);
        convertResult.textContent = temp.toFixed(1) + "・C"


    }else {
        convertResult.textContent = "Select a unit";
    }


}