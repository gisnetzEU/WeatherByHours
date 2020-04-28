const API_URL = "http://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=f6211bc24c258c57f7a7fba887afdd17"
const output = document.querySelector('#output')
const button = document.querySelector('input')
console.log(button)
button.addEventListener('click', function (e) {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            output.innerHTML = JSON.stringify(data);
            output.innerHTML += data.name;
            // response.weather[0].main + description+ response.main.pressure+ response.main.humidity+jsonResponse.wind.speed;
            `
            <div class="card">
                    <img class="card-img-top" src="holder.js/100x180/" alt="">
                    <div class="card-body">
                    <h4 class="card-title">${comment.email}</h4>
                      <p class="card-text">${comment.body}</p>
                    </div>
                    
                  </div>
            `
            
        })

    e.preventDefault()
})


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