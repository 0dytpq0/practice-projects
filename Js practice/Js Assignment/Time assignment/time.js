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