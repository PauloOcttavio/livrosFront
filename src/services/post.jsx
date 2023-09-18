import {api} from "./api"
export async function CriarNutricionista(data) {
    const result = await api.post('/nutricionista', data);
}
