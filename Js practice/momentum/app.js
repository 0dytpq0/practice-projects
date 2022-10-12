const title = document.querySelector("h2");

const superEventHandler = {
    mouseIsHere: function () {
        title.innerText = "Mouse is Here!";
        title.style.color = "blue";
    },
    mouseIsGone: function () {
        title.innerText = "Mouse is Gone!";
        title.style.color = "tomato";
    },
    rightClicked: function () {
        title.innerText = "That was a right click!";
        title.style.color = "purple";
    },
    resized: function () {
        title.innerText = "You just Resized!";
        title.style.color = "steal";
    }
};





title.addEventListener("mouseover", superEventHandler.mouseIsHere);
title.addEventListener("mouseleave", superEventHandler.mouseIsGone);
window.addEventListener("contextmenu", superEventHandler.rightClicked);
window.addEventListener("resize", superEventHandler.resized);


