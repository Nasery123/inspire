import { AppState } from "../AppState.js"
import { Weather } from "../models/weather.js"
import { weatherService } from "../services/WeatherService.js"
import { Pop } from "../utils/Pop.js"
// @ts-ignore
//import { setHTML } from "../utils/Writer.js"
import { setHTML } from "../utils/Writer.js"


function _drawWeather() {
    console.log('here is the weather function')
    const weather = AppState.weather

    // @ts-ignore
    setHTML('weather', weather.weatherTemplate)
    // let weather = AppState.weather
    // let template = ''
    // Note why the innerHtml is red, why they do not accept the name and says it is undefined.
    // weather.innerHTML = `
    // <div class="col-3">
    // <p>${this.name}</p>
    // <p>${this.main}</p>
    // <p>${this.weather}</p>`

    // document.querySelector('weather').textContent = `${this.weather}`
    // document.getElementById('city').textContent = `${this.city}`


}

export class WeatherController {
    constructor() {
        console.log('weather controller')
        // AppState.on('weather', _drawWeather)
        AppState.on('weather', _drawWeather)
        AppState.on('showF', _drawWeather)
        AppState.on('account', this.getWeatherFromApi)
    }

    async getWeatherFromApi() {
        try {
            await weatherService.getWeatherFromApi()

        } catch (error) {
            Pop.error(error)

        }
    }
    // async toggleTemp() {
    //     try {
    //         await weatherService.toggleWeather()
    //     } catch (error) {
    //         Pop.error(error)
    //     }
    // }


}
