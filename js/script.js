var hamb = document.querySelector(".hamb");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-link li");

hamb.addEventListener("click", function(){
    this.classList.toggle("click");
    navList.classList.toggle("open");
});