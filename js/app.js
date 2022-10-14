let btnBtn = document.querySelector(".btn-1");
let btnBtn2 = document.querySelector(".btn-2");
let btnBtn3 = document.querySelector(".btn-3");
let imgLogo = document.querySelector(".img_logo");
let imgLogo2 = document.querySelector(".img_logo_2");
let imgLogo3 = document.querySelector(".img_logo_3");

btnBtn.addEventListener("click", function() {
    alert("HTML");
    console.log(prompt("HTML kim o'ylab topgan?"));
    console.log(prompt("EM nima vazifani bajaradi?"));
    console.log(prompt("STRONG nima vazifani bajaradi?"));
    console.log(prompt("DIV manosi?"));
    imgLogo.classList.add("img_1");
})
btnBtn2.addEventListener("click", function() {
    alert("CSS");
    console.log(prompt("CSS kim o'ylab topgan?"));
    console.log(prompt("display none vazifasi?"));
    console.log(prompt("font size vazifasi?"));
    console.log(prompt("border none vazifasi?"));
    imgLogo2.classList.add("img_2");
})
btnBtn3.addEventListener("click", function() {
    alert("JS");
    console.log(prompt("js ulash usulari?"));
    console.log(prompt("js kim o'ylab topgan?"));
    console.log(prompt("let/var faqrqi?"));
    console.log(prompt("var manosi?"));
    imgLogo2.classList.remove("img_3");
})