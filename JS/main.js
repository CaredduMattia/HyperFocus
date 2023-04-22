
// autoplay video 1

let video1 = document.querySelector("#video1");

function playVid1(){
    video1.setAttribute("playsinline", "");
    video1.setAttribute("controls", true);
    video1.setAttribute("autoplay", "");
    setTimeout(() => {
        video1.removeAttribute("controls");
        });
    }

function stopVid1(){
    video1.setAttribute("controls", true);
    video1.removeAttribute("autoplay", "");
    setTimeout(() => {
        video1.removeAttribute("controls");
        });
    }

window.addEventListener("load",()=>{
    playVid1();
})

video1.addEventListener("click", ()=>{
    stopVid1();
})

// autoplay video 2

let video2 = document.querySelector("#video2");

function playVid2(){
    video2.setAttribute("playsinline", "");
    video2.setAttribute("controls", true);
    video2.setAttribute("autoplay", "");
    setTimeout(() => {
        video2.removeAttribute("controls");
        });
    }

function stopVid2(){
    video2.setAttribute("controls", true);
    video2.removeAttribute("autoplay", "");
    setTimeout(() => {
        video2.removeAttribute("controls");
        });
    }

window.addEventListener("load",()=>{
    playVid2();
})

video2.addEventListener("click", ()=>{
    stopVid2();
})

//  evento scroll navbar

let navbar = document.querySelector("#navbar");
let scrollvalue = 0;

window.addEventListener("scroll", ()=>{
    if(scrollvalue > window.scrollY){
        navbar.classList.remove("d-none");
    }
    else{
        navbar.classList.add("d-none");
    }
    scrollvalue = window.scrollY;
})

