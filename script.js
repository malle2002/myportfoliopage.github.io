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
