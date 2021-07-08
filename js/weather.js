const API_KEY = 'fcfd013765e7f441f7a7474019ab924b';

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weatherIcon = document.querySelector("#weather .icon");
        const weatherTemp = document.querySelector("#weather .info p:last-child");
        const city = document.querySelector("#weather .info p:first-child");
        const icon = data.weather[0].icon;

        weatherIcon.innerHTML = `
        <img src="http://openweathermap.org/img/wn/${icon}@2x.png" src=${data.weather[0].main} />
        `;
        weatherTemp.innerText = `${data.main.temp} ℃`;
        city.innerText = data.name;
    });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);