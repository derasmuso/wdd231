const currentWeather = document.querySelector("#weather");
const weatherForecast = document.querySelector("#forecast");

const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=40.30&lon=-111.30&units=imperial&appid=E0fc0058bdffe22589309797ca9b3e03";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=40.30&lon=-111.30&units=imperial&appid=E0fc0058bdffe22589309797ca9b3e03";

async function apiFetch() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();
            displayWeather(data);
        } else {
            throw Error(await response.text());
        }

        const forecastResponse = await fetch(forecastUrl);
        if (forecastResponse.ok) {
            const forecastData = await forecastResponse.json();
            displayForecast(forecastData);
        } else {
            throw Error(await forecastResponse.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function average(temps) {
    return temps.reduce((sum, value) => sum + value, 0) / temps.length;
}


function displayWeather(data) {
    let currentTemp = document.createElement("p");
    let description = document.createElement("p");
    let high = document.createElement("p");
    let low = document.createElement("p");
    let humidity = document.createElement("p");

    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    description.textContent = `${data.weather[0].description}`;
    description.classList.add("description");
    high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;F`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;

    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(description);
    currentWeather.appendChild(high);
    currentWeather.appendChild(low);
    currentWeather.appendChild(humidity);
}

function displayForecast(data) {
    let today = document.createElement("p");
    let tomorrow = document.createElement("p");
    let thirdDay = document.createElement("p");

    let dailyTemps = {};
    data.list.forEach(item => {
        let date = item.dt_txt.split(" ")[0];
        if (!dailyTemps[date]) dailyTemps[date] = [];
        dailyTemps[date].push(item.main.temp);
    });

    let days = Object.keys(dailyTemps).slice(0, 3);
    const dayNames = days.map((forecastDate, index) => {
        const date = new Date(forecastDate);
        if (index === 0) return "Today";
        const format = { weekday: "long" };
        return date.toLocaleDateString("en-US", format);
    })

    today.innerHTML = `${dayNames[0]}: ${average(dailyTemps[days[0]]).toFixed(1)}&deg;F`;
    tomorrow.innerHTML = `${dayNames[1]}: ${average(dailyTemps[days[1]]).toFixed(1)}&deg;F`;
    thirdDay.innerHTML = `${dayNames[2]}: ${average(dailyTemps[days[2]]).toFixed(1)}&deg;F`;

    weatherForecast.appendChild(today);
    weatherForecast.appendChild(tomorrow);
    weatherForecast.appendChild(thirdDay);

}

