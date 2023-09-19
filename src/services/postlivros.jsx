import axios from "axios";
export async function criarLivros(data) {
    const result = await axios.post('http://localhost:8000/usuario', data);
    console.log(data)
}
