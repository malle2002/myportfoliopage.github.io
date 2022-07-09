let getNavBar = document.querySelector("body > div > nav");
let getMenu = document.querySelector("body > div > nav > div > ul");
let getMenuBtn = document.querySelector("body > div > nav > div > div.menu-btn > i");
let getScrollBtn = document.querySelector("body > div > div");
function scrollfunction(){
    if(this.scrollY > 20){
        getNavBar.classList.add("sticky");
    }
    else{
        getNavBar.classList.remove("sticky");
    }
    if(this.scrollY > 500){
        getScrollBtn.classList.add("show");
    }
    else{
        getScrollBtn.classList.remove("show");
    }
}
window.addEventListener("scroll",scrollfunction);
function myfunction(){
    getMenu.classList.toggle("active");
    getMenuBtn.classList.toggle("active");
}
getMenuBtn.addEventListener("click", myfunction);

getScrollBtn.addEventListener("click",function(){
    window.scrollTo(0, 0)
})



function openModal() {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("contact").style.display = "none";
    document.getElementById("navbar1").style.display = "none";
    document.getElementById("scrollup").style.display = "none";
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
    document.getElementById("contact").style.display = "block";
    document.getElementById("navbar1").style.display = "block";
    document.getElementById("scrollup").style.display = "block";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}