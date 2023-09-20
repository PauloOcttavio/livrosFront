import {api} from "./api"
export async function DeletarUsuario(id) {
    const result = await api.delete(`/usuario/${id}`);
    console.log(id);
}
