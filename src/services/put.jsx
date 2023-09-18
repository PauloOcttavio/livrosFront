import {api} from "./api"
export async function AtualizarNutricionista(id,data) {
    const result = await api.post(`/nutricionista/:${id}`, data);
}
