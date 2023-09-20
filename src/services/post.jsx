import axios from "axios";
export async function PostUsuario(data) {
    const result = await axios.post('http://localhost:8080/usuario', data);
    console.log(data)
}
