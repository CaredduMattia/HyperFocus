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


// IMMAGINI

let immagini = document.querySelectorAll(`.immagini`);

let titoloImmagini = document.querySelectorAll(`.titolo-immagini`);

check = false;

immagini.forEach((img)=>{

    img.addEventListener(`mouseenter`, ()=>{

        cursor.style.transform = `scale(1.3)`;

    })

    img.addEventListener(`mouseleave`, ()=>{

        cursor.style.transform = `scale(1)`;
    })
})

titoloImmagini.forEach((tit)=>{

    tit.addEventListener(`mouseenter`, ()=>{

        cursor.style.transform = `scale(1.3)`;

        tit.style.color = `grey`;

        tit.style.transition = `0.4s`;

        if(check == false){

            cursor.style.transition = `0.4s`;

            check = true;
        
        } else {

            cursor.style.transition = `0s`;

            check = false;
        }

    })

    tit.addEventListener(`mouseleave`, ()=>{

        cursor.style.transform = `scale(1)`;

        tit.style.color = `black`;

        if(check == false){

            cursor.style.transition = `0.4s`;

            check = true;
        
        } else {

            cursor.style.transition = `0s`;

            check = false;
        }


    })
})