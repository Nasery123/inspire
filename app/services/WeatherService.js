import { AppState } from "../AppState.js"
import { Weather } from "../models/weather.js"
import { api } from "./AxiosService.js"

class WeatherService {





    async getWeatherFromApi() {
        const res = await api.get('api/weather/')
        AppState.weather = new Weather(res.data)
    }

    async toggleWeather() {
        let temp = AppState.weather
        temp = (temp - 32) / 1.8
        AppState.weather = temp
    }
}
export const weatherService = new WeatherService()
