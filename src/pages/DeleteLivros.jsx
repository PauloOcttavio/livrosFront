import { Button,Col,Form } from "react-bootstrap"
import { useState } from "react"
import { deletarLivros } from "../services/deletelivros"
import {Container} from "react-bootstrap"
export function DeleteLivros() {
    const [id,setId] = useState("1")
    const onSubmit= async()=>{
        const delet = await DeleteLivros(id)
    }
    return(
        <Container className="bg-light rounded p-5 shadow w-50  m-auto mt-3">
            <Form >
                <label>Coloque o id do livro</label>
                <input type="text" onChange={(e)=>setId(e.target.value)}></input>
            </Form>
            <Button onClick={onSubmit} className="ms-1">Deletar</Button>
        </Container>
    )
}