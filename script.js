let bg = document.getElementById("bg");
let title = document.getElementById("title");

window.addEventListener("scroll", function(){

let value = window.scrollY;

bg.style.transform = "translateY(" + value * 0.5 + "px)";
title.style.transform = "translateY(" + value * 1 + "px)";

});