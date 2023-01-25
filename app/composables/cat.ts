import { Ref } from 'vue';
import { CatResponse } from '~~/types';
import CatApi from '~~/services/cat'

export const catData = () => {
    const data: Ref<CatResponse[]> = useState('cat-data',  () => [])

    const updateData = () => async () => {
        data.value = await CatApi.getCat();
    }

    return {
        data: data,
        updateData: updateData()
    }
}