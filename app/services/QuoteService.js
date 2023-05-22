import { AppState } from "../AppState.js"
import { Quote } from "../models/Quote.js"
import { api } from "./AxiosService.js"

class QuoteService {
    async getQuoteFromApi() {
        const res = await api.get('api/quotes/')
        
        console.log('[GETTING THE QUOTE', res.data)
        AppState.quote = new Quote(res.data)


    }

}
export const quoteService = new QuoteService()
