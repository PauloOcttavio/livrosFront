import {api} from "./api"
export async function PutLivro(id,data) {
    const result = await api.post(`/usuario/:${id}`, data);
}
