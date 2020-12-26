class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.dewpoint = document.getElementById('w-dewpoint');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather){
        // "http://openweathermap.org/img/wn/10d@2x.png"
        const w = weather.weather[0];
        const icon = w.icon;
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`
            
        this.location.textContent = weather.name;
        this.desc.textContent = w.description;
        this.string.textContent = `${weather.main.temp} °C`;
        this.icon.setAttribute('src', iconUrl);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity} %`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} °C`;
        this.dewpoint.textContent = `DewPoint: ${weather.main.temp_min} °C`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed} m/sec`;
        
    

    }
}