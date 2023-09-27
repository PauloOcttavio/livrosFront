import axios from "axios";
export async function PostLivro(data) {
    const result = await axios.post('http://localhost:8080/livro', data);
    console.log(data)
}
export async function PostAutor(data,id){
    const result = await axios.post('http://localhost:8080/autor', data);
    console.log(data)
}
