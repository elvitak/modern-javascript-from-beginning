class Weather {
    constructor(city, state){
        this.apiKey ='43ab1b0e93767dd0d9f193224f9ba289';
        this.city = city;
        this.state = state;
    }

    //Fetch weather from API
    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`)

        const responseData = await response.json();

        return responseData;
    }

    //Change weather location
    changeLocation(city, state){
        this.city = city;
        this.state = state;
    }
}