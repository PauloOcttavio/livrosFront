import {api} from "./api"
export async function deletarUsuario(id) {
    const result = await api.delete(`/usuario/${id}`);
    console.log(id);
}
