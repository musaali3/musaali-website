const modal = document.querySelector(".overlay")

setTimeout(function() {
    modal.classList.add("show-modal")
},1500);

document.querySelector("#close-quote-btn");
addEventListener("click", () => {
    modal.classList.remove("show-modal");
    modal.classList.add("hide-modal");
})

var typed = new Typed(".typing",{
    strings: ["Learner", "Developer", "Graphic Designer", "Leader"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
})

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
})

let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter == 70){
        clearInterval();
    } else {
    counter += 1;
    number.innerHTML = counter + "%";
    }
}, 30);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
    if(counter2 == 60){
        clearInterval();
    } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
    }
}, 30);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
    if(counter3 == 30){
        clearInterval();
    } else {
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
    }
}, 30);