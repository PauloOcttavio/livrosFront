import {api} from "./api"
export async function DeleteLivros(id) {
    const result = await api.delete(`/usuario/${id}`);
    console.log(id);
}
