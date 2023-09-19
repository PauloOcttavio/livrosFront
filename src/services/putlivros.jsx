import {api} from "./api"
export async function atualizarLivros(id,data) {
    const result = await api.post(`/usuario/:${id}`, data);
}
