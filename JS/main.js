
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

function createCustomCursor() {
    let cursor = document.getElementById('myCustomCursor');

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

