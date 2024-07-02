const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];
const button = document.querySelector("button");
const body = document.querySelector("body");

function colorChange(event) {
    const arr = [];
    const randomBgColors1 = colors[Math.floor(Math.random() * colors.length)];
    for (let i = 0; i < colors.length; i++) {
        if (colors[i] !== randomBgColors1) {
            arr.push(colors[i]);
        }
    }
    const randomBgColors2 = arr[Math.floor(Math.random() * arr.length)];
    console.log(randomBgColors1)
    console.log(randomBgColors2)
    body.style.backgroundImage = `linear-gradient(${Math.random()}turn, ${randomBgColors1}, ${randomBgColors2}  )`;
    console.log(arr);
}

button.addEventListener("click", colorChange);