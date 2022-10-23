const weather = document.querySelector(".weather span:first-child");
const city = document.querySelector(".weather span:last-child");

const API_KEY = "e45be3e801e2b6342ab3503212543035";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url) //시간이 좀 걸림 그래서 then을 써야함. 후에 설명함.
        .then(response => response.json()
            .then(data => {
                city.innerText = data.name;
                weather.innerText = `Weather : ${data.weather[0].main} / Temp : ${data.main.temp}`;
            }));
}
function onGeoError() {
    alert("Cant find you. No wather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //현제위치(실행될때함수,잘못될때 함수)