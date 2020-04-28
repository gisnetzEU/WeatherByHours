const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17"
const API_URL_Hrs = "https://api.openweathermap.org/data/2.5/forecast?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17"
/* const output = document.querySelector('#output')
const button = document.querySelector('input')
console.log(button)
button.addEventListener('click', function (e) { */
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        d = new Date();
        output.innerHTML = `
            <div class="card">                    
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
        let hour = data.list;
        
        hours.innerHTML += `
            <div class="col1">
            <img src="http://openweathermap.org/img/wn/${hour[0].weather[0].icon}@2x.png" alt="">
            <br>15 hrs: ${(hour[0].main.temp - 273.15).toFixed(2)}°C
            </div>
            <div class="col2">
            <img src="http://openweathermap.org/img/wn/${hour[0].weather[0].icon}@2x.png" alt="">
            <br>18 hrs: ${(hour[1].main.temp - 273.15).toFixed(2)}°C
            </div>
            <div class="col3">
            <img src="http://openweathermap.org/img/wn/${hour[0].weather[0].icon}@2x.png" alt="">
            <br>21 hrs: ${(hour[2].main.temp - 273.15).toFixed(2)}°C
            <div>    
            `      
})
