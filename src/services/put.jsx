import {api} from "./api"
export async function atualizarUsuario(id,data) {
    const result = await api.post(`/usuario/:${id}`, data);
}
