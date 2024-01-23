


const key = "cc3d04abf3276b378d34969d6111683c"

function clique() {
    const city = document.querySelector(".input-city").value

    citySearch(city)
}

async function citySearch (city) {
    const data = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    displayData(data)
    

}


function displayData(data) {
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".graus") .innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".clima") .innerHTML = data.weather[0].description
    document.querySelector(".umidade") .innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather.icon}.png`  
    console.log(data);
}