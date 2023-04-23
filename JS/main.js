
// autoplay video 1

let video1 = document.querySelector("#video1");

function playVid1() {
    video1.setAttribute("playsinline", "");
    video1.setAttribute("controls", true);
    video1.setAttribute("autoplay", "");
    setTimeout(() => {
        video1.removeAttribute("controls");
    });
}

function stopVid1() {
    video1.setAttribute("controls", true);
    video1.removeAttribute("autoplay", "");
    setTimeout(() => {
        video1.removeAttribute("controls");
    });
}

window.addEventListener("load", () => {
    playVid1();
})

video1.addEventListener("click", () => {
    stopVid1();
})

// autoplay video 2

let video2 = document.querySelector("#video2");

function playVid2() {
    video2.setAttribute("playsinline", "");
    video2.setAttribute("controls", true);
    video2.setAttribute("autoplay", "");
    setTimeout(() => {
        video2.removeAttribute("controls");
    });
}

function stopVid2() {
    video2.setAttribute("controls", true);
    video2.removeAttribute("autoplay", "");
    setTimeout(() => {
        video2.removeAttribute("controls");
    });
}

window.addEventListener("load", () => {
    playVid2();
})

video2.addEventListener("click", () => {
    stopVid2();
})

//  evento scroll navbar

let navbar = document.querySelector("#navbar");
let scrollvalue = 0;

window.addEventListener("scroll", () => {
    if (scrollvalue > window.scrollY) {
        navbar.classList.remove("d-none");
    }
    else {
        navbar.classList.add("d-none");
    }
    scrollvalue = window.scrollY;
})

// cursore negativo

let cursor = document.getElementById('myCustomCursor');
function createCustomCursor() {

    if (cursor) {
        console.log('myCustomCursor already exist');
        //addCursorSpecialEffectToAllPageLinks(cursor);
    } else {
        cursor = document.createElement("div");
        cursor.setAttribute("id", "myCustomCursor");
        document.body.appendChild(cursor);

        initCustomCursor(cursor);
        //addCursorSpecialEffectToAllPageLinks(cursor);
    }
}


function initCustomCursor(cursor) {
    document.body.onmousemove = function (e) {
        cursor.style.setProperty('--x', (e.clientX) + 'px');
        cursor.style.setProperty('--y', (e.clientY) + 'px');
    }
}

function addCursorSpecialEffectToAllPageLinks(cursor) {
    var links = document.querySelectorAll("a");

    // This for loop is used to find all the page links and add the "myCursorHoverState" css class to create special effect on hover
    for (var i = 0; i < links.length; i++) {
        var link = links[i].getAttribute("href");
        console.log(link);

        links[i].addEventListener("mouseenter", function (event) {
            console.log('In');
            cursor.classList.add("myCursorHoverState");
        }, false);

        links[i].addEventListener("mouseleave", function (event) {
            console.log('Out');
            cursor.classList.remove("myCursorHoverState");
        }, false);
    }
}

createCustomCursor();

// fine cursore negativo


// Section email 

let inputEmail = document.querySelector(`#inputEmail`);

let singUpCustom = document.querySelector(`#singUpCustom`);

let buttonEmailCustom = document.querySelector(`.button-email-custom`);

// inizio evento input email

inputEmail.addEventListener(`mouseenter`, ()=>{

    inputEmail.style.background = ` rgba(128, 128, 128, 0.093)`;
  
    inputEmail.style.cursor = `none`;

    inputEmail.style.transition = `0.4s`;

        
})

inputEmail.addEventListener(`mouseleave`, ()=>{

  
    inputEmail.style.background = `white`;
})

// fine evento input email 

  
// Inizio evento bottone sign up
   
buttonEmailCustom.addEventListener(`mouseenter`, ()=>{

    singUpCustom.style.color = `grey`;

    singUpCustom.style.cursor = `none`;

    singUpCustom.style.transition = `0.4s`;

    cursor.style.transform = `scale(1.3)`;

})

buttonEmailCustom.addEventListener(`mouseleave`, ()=>{

    singUpCustom.style.color= `black`;

    singUpCustom.style.transition = `0.4s`;

    cursor.style.transform = `scale(1)`;
    
})

// fine evento bottone sign up
  


