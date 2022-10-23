const API_KEY = "e45be3e801e2b6342ab3503212543035";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat={${lat}}&lon={${lon}}&appid={${API_KEY}}`;
    fetch(url)
        .then(response => response.json()
            .then(data => {
                const weather = document.querySelector(".weather span:first-child");
                const city = document.querySelector(".weather span:last-child");
                city.innerText = data.name;
                weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
            }));
}
function onGeoError() {
    alert("Cant find you. No wather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError); //현제위치(실행될때함수,잘못될때 함수)



