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