
const sliders = document.querySelectorAll(".sliders img");
let slideIndex = 0;
let intervalId = null;

function initializeSlider(){

    if(sliders.length > 0){
        sliders[slideIndex].classList.add("displaySlider");
        intervalId = setInterval(nextSlide,3000);
    }

}

function showSlide(index){

    if(index >= sliders.length){

        slideIndex = 0;

    }else if(index < 0){
        slideIndex = sliders.length - 1;
    }

    sliders.forEach(slide => {
        slide.classList.remove("displaySlider");
    })
    sliders[slideIndex].classList.add("displaySlider");
}

function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}
document.addEventListener("DOMContentLoaded", initializeSlider);
