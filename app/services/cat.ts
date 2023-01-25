import axios from 'axios';
import { CatResponse } from "~~/types"

class CatApi {
    async getCat(): Promise<CatResponse[]> {
        const response = await axios.get(
            'https://api.thecatapi.com/v1/images/search?limit=9'
        );
        return response.data;
    }
}

export default new CatApi; 