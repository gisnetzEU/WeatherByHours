const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17"
const API_URL_Hrs = "https://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17"
/* const output = document.querySelector('#output')
const button = document.querySelector('input')
console.log(button)
button.addEventListener('click', function (e) { */
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        
        output.innerHTML = `
            <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                        <img class="card-img-top" src="holder.js/100x180/" alt="">
                        <h4 class="card-title">${data.name}</h4>
                        <p class="card-text">${data.weather[0].main}: ${data.weather[0].description}</p>
                        <h5>${d}</h5>
                        ${(data.main.temp - 273.15).toFixed(2)}°C
                        <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" id="productImg"  class="img-responsive" alt="" srcset="">
                        <p class="card-text">Pressure: ${data.main.pressure} hPa</p>
                        <p class="card-text">Humidity: ${data.main.humidity}%</p>
                        <p class="card-text">Wind Speed: ${data.wind.speed} meters/sec</p>
                        <hr>
                        
                    </div>
                  </div>
            `
    })

    fetch(API_URL_Hrs)
    .then(response => response.json())
    .then(data => {
        let responseofWeatherHours = data.list;
        
        hours.innerHTML = `


//})


/* City name: jsonResponse.name
Describe of weather: jsonResponse.weather[0].main + description
Weather Icon = `http://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}@2x.png`
Pressure = jsonResponse.main.pressure
Humidity= jsonResponse.main.humidity
Wind Speed = jsonResponse.wind.speed



WeatherByHours: https://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17



let responseofWeatherHours =  data.list



9clock =  data.list[0]
12clcok = data.list[1]
15 = data.list[2] */