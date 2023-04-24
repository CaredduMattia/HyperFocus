
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

// autoplay video 1
let check = true;
let check2 = true;
let video1 = document.querySelector("#video1");

video1.addEventListener("click", () => {
    if (check == false) {
        video1.play();
        video1.classList.remove("cursorpointer");
        video1.classList.add("cursordefault");
        check = true;
    } else {
        video1.pause();
        video1.classList.remove("cursordefault")
        video1.classList.add("cursorpointer")
        check = false;
    }
})

video1.addEventListener("mouseenter", () => {
    cursor.classList.add("d-none");
})

video1.addEventListener('mouseleave', () => {
    cursor.classList.remove("d-none");
})

// autoplay video 2

let video2 = document.querySelector("#video2");

video2.addEventListener("click", () => {
    if (check2 == false) {
        video2.play();
        video2.classList.remove("cursorpointer");
        video2.classList.add("cursordefault");
        check2 = true;
    } else {
        video2.pause();
        video2.classList.remove("cursordefault")
        video2.classList.add("cursorpointer")
        check2 = false;
    }
})

video2.addEventListener("mouseenter", () => {
    cursor.classList.add("d-none");
})

video2.addEventListener('mouseleave', () => {
    cursor.classList.remove("d-none");
})


//  evento scroll navbar

let navbar = document.querySelector("#navbar");
let scrollvalue = 0;

window.addEventListener("scroll", () => {
    if (scrollvalue > window.scrollY) {
        navbar.style.top = "0";
    }
    else {
        navbar.style.top = "-150px";
        

    }
    scrollvalue = window.scrollY;
})



// Section email 

let inputEmail = document.querySelector(`#inputEmail`);

let singUpCustom = document.querySelector(`#singUpCustom`);

let buttonEmailCustom = document.querySelector(`.button-email-custom`);

// inizio evento input email

inputEmail.addEventListener(`mouseenter`, () => {

    inputEmail.style.background = ` rgba(128, 128, 128, 0.093)`;

    inputEmail.style.cursor = `none`;

    inputEmail.style.transition = `0.4s`;


})

inputEmail.addEventListener(`mouseleave`, () => {


    inputEmail.style.background = `white`;
})

// fine evento input email 


// Inizio evento bottone sign up

buttonEmailCustom.addEventListener(`mouseenter`, () => {

    singUpCustom.style.color = `grey`;

    singUpCustom.style.cursor = `none`;

    singUpCustom.style.transition = `0.4s`;

    cursor.style.transform = `scale(1.3)`;

})

buttonEmailCustom.addEventListener(`mouseleave`, () => {

    singUpCustom.style.color = `black`;

    singUpCustom.style.transition = `0.4s`;

    cursor.style.transform = `scale(1)`;

})

// fine evento bottone sign up



