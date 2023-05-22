import { AppState } from "../AppState.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { pictureService } from "../services/pictureService.js"
function _drawPicture() {
    const picture = AppState.picture
    document.body.style.backgroundImage = `url(${picture.imgUrl})`
    //setHTML('')

}



export class PictureController {
    constructor() {
        console.log('hey here ')
        this.getPicture()
        AppState.on('picture', _drawPicture)
    }



    async getPicture() {
        try {
            await pictureService.getPicture()
        } catch (error) {
            Pop.error(error)

        }
    }
}
