import { AppState } from "../AppState.js";
import { picture } from "../models/picture.js";
import { api } from "./AxiosService.js";

class PictureService {
    async getPicture() {
        const res = await api.get('/api/images')
        AppState.picture = new picture(res.data)
        console.log('res dotte data',res.data)
    }
}
export const pictureService = new PictureService()
