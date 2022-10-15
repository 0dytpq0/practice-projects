// const bgColor = document.querySelector(".basicBg");

// function handleResizebg() {
//     const innerWidth = window.innerWidth;
//     return innerWidth < 700 ? bgColor.className = "resizedSm" :
//         innerWidth >= 1000 ? bgColor.className = "resizedLg" :
//             bgColor.className = "basicBg"
// }

// window.addEventListener("resize", handleResizebg);

const bgColor = document.querySelector(".basicBg");

function handleResizebg() {
    const innerWidth = window.innerWidth;
    if (innerWidth < 700) {
        bgColor.className = "resizedSm";
    } else if (innerWidth >= 1000) {
        bgColor.className = "resizedLg";
    } else {
        bgColor.className = "basicBg";
    }
}

window.addEventListener("resize", handleResizebg);


