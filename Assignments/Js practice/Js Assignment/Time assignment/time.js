const remainedTIme = document.querySelector(".d-day");

function dDay() {
    const dDayDate = new Date("2022-12-25");
    const todayDate = new Date();
    const diff = dDayDate - todayDate;

    const day = String(Math.floor(diff / (24 * 60 * 60 * 1000))).padStart(2, "0");
    const hours = String(Math.floor(diff / (60 * 60 * 1000) % 24)).padStart(2, "0");
    const minutes = String(Math.floor(diff / (60 * 1000) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

    remainedTIme.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;

}

dDay();
setInterval(dDay, 1000);

// function getTime() {
//     const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);
//     const now = new Date();
//     // This is in milisecondsx
//     const difference = new Date(xmasDay - now);
//     const secondsInMs = Math.floor(difference / 1000);
//     const minutesInMs = Math.floor(secondsInMs / 60);
//     const hoursInMs = Math.floor(minutesInMs / 60);
//     const days = Math.floor(hoursInMs / 24);
//     const seconds = secondsInMs % 60;
//     const minutes = minutesInMs % 60;
//     const hours = hoursInMs % 24;
//     const daysStr = `${days < 10 ? `0${days}` : days}d`;
//     const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
//     const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m `;
//     const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}s`;
//     clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
//   }
  
//   getTime();
//   setInterval(getTime, 1000);