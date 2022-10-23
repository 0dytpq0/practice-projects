const images = ["01.jpeg", "02.jpeg", "03.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// = <img src="" /> 아직 js에만 존재
document.body.appendChild(bgImage);
//body에 bgimage추가.