import {api} from "./api"
export async function deletarLivros(id) {
    const result = await api.delete(`/usuario/${id}`);
    console.log(id);
}
