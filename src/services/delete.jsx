import {api} from "./api"
export async function DeletarNutricionista(id) {
    const result = await api.delete(`/nutricionista/${id}`);
}
