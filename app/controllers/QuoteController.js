import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { quoteService } from "../services/QuoteService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"

function _drawQuote() {
    const quot = AppState.quote

    // @ts-ignore
    setHTML('quote', quot.quoteTemplate)
    console.log('here is the quote')

}


export class QuoteController {
    constructor() {
        console.log('here  is the quote controller')


        console.log('here is the quote', _drawQuote)
        AppState.on('quote', _drawQuote)
        AppState.on('account', this.getQuoteFromApi)
    }


    async getQuoteFromApi() {
        try {
            await quoteService.getQuoteFromApi()


        } catch (error) {
            Pop.error(error)

        }
    }
}




// async getTodoFromApi() {
//     try {
//         await quoteService.getQuoteFromApi()

//     } catch (error) {
//         Pop.error(error)

//     }
// }
