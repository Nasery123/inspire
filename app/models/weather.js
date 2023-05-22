import { AppState } from "../AppState.js"

export class Weather {
    constructor(data) {

        this.name = data.name
        this.main = data.main.temp

        // FIXME these calculations seem a bit off
        this.c = data.main.temp - 273.15
        this.f = (data.main.temp - 32) / 1.8

        this.weather = data.weather.icon
        this.icon = data.icon
    }

    get weatherTemplate() {
        // FIXME think about adding a click to this that can change showF
        return/*html*/ `
        <div class="col-4">
        <p>${this.tempTemplate}</p>

        <p>${this.name}</p>
      </div>
        `

    }


    get tempTemplate() {
        if (AppState.showF) {
            return this.f
        }
        return this.c
    }


}
