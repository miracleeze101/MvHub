const inputs = document.querySelectorAll(".input-field");
const toggle_btn = document.querySelectorAll(".toggle");
const main = document.querySelector("main");
const bullets  = document.querySelectorAll(".bullets span");
const images = document.querySelectorAll(".image");
const btnPopup = document.querySelector(".btn");
const iconClose = document.querySelector(".fa-regular");


inputs.forEach((inp) => {
    inp.addEventListener("focus", () =>{
        inp.classList.add("active");
    });
    inp.addEventListener("blur",() => {
    if(inp.value !="") return;        
        inp.classList.remove("active");
    });
}); 

toggle_btn.forEach((btn) => {
    btn.addEventListener("click", () => {
        main.classList.toggle("sign-up-mode");
    });
});


function moveSlider (){
    let index = this.dataset.value;
    console.log(index)

    let currentImge = document.querySelector(`.img-${index}`)
    console.log(currentImge)

images.forEach((img) => img.classList.remove("show"));
currentImge.classList.add("show");

const textSlider = document.querySelector(".text-group");
textSlider.style.transform = `translateY(${-(index - 1) * 2.2}rem)`;

    bullets.forEach((bull) => bull.classList.remove("active"));
    this.classList.add("active");
}

bullets.forEach((bullet) => {
    bullet.addEventListener("click", moveSlider);
})


btnPopup.addEventListener("click", () => {
    main.classList.add("active-popup");
});


iconClose.addEventListener("click", () => {
    main.classList.remove("active-popup");
});