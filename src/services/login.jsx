import {api} from "./api"
export async function login(data) {
    const result = await api.post('/login', data);
}
