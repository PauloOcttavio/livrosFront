import axios from "axios";
export async function criarUsuario(data) {
    const result = await axios.post('http://localhost:8000/usuario', data);
    console.log(data)
}
