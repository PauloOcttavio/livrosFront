import {api} from "./api"
export async function PutUsuario(id,data) {
    const result = await api.put(`/usuario/${id}`, data);
}
