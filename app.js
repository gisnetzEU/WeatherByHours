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
        
            <img class="card-img-top" src="holder.js/100x180/" alt="" />
            <h2 class="card-title">${data.name}</h2>
            <p class="card-text">
              ${data.weather[0].main}: ${data.weather[0].description}
            </p>
            <h5>${d}</h5>
            <div class="row">
              <div class="col">
                <br><h1 class="display-4">
                  ${(data.main.temp - 273.15).toFixed(2)}°C
                  
                   <img
                    src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
                    id="productImg"
                    class="img-responsive"
                    alt=""
                    srcset=""
                    />
                    </h1>
              </div>
              <div class="col">
                <br>
                Pressure: ${data.main.pressure} hPa
                <br />Humidity: ${data.main.humidity}%
                <br />Wind Speed: ${data.wind.speed} meters/sec
              </div>
              <hr />
            </div>
          
            `
    })

fetch(API_URL_Hrs)
    .then(response => response.json())
    .then(data => {
        let hour = data.list;
        let h0 = new Date(hour[0].dt_txt).getHours();
        let h1 = new Date(hour[1].dt_txt).getHours();
        let h2 = new Date(hour[2].dt_txt).getHours();
        let h3 = new Date(hour[3].dt_txt).getHours();
        let h4 = new Date(hour[4].dt_txt).getHours();

        hours.innerHTML += `
        <table class="table table-hover">
            <thead>
              <tr>
            
                <th scope="col">
                ${h0} hrs<br><img src="http://openweathermap.org/img/wn/${hour[0].weather[0].icon}@2x.png" alt="">
                <br>${(hour[0].main.temp - 273.15).toFixed(2)}°C
                </th>
                <th scope="col">
                ${h1} hrs<br>
                <img src="http://openweathermap.org/img/wn/${hour[1].weather[0].icon}@2x.png" alt="">
                <br>${(hour[1].main.temp - 273.15).toFixed(2)}°C
                </th>
                <th scope="col">
                ${h2} hrs<br>
                <img src="http://openweathermap.org/img/wn/${hour[2].weather[0].icon}@2x.png" alt="">
                <br>${(hour[2].main.temp - 273.15).toFixed(2)}°C
                </th>
                <th scope="col">
                ${h3} hrs<br>
                <img src="http://openweathermap.org/img/wn/${hour[3].weather[0].icon}@2x.png" alt="">
                <br>${(hour[3].main.temp - 273.15).toFixed(2)}°C
                </th>
                <th scope="col">
                ${h4} hrs<br>
                <img src="http://openweathermap.org/img/wn/${hour[4].weather[0].icon}@2x.png" alt="">
                <br>${(hour[4].main.temp - 273.15).toFixed(2)}°C
                </th>
          </tr>
          </thead>
        `
    })
