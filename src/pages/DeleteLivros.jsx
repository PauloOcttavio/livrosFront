import { Button,Col,Form } from "react-bootstrap"
import { useState } from "react"
import { deletarLivros } from "../services/deletelivros"
export function DeleteLivros() {
    const [id,setId] = useState("1")
    const onSubmit= async()=>{
        const delet = await DeleteLivros(id)
    }
    return(
        <div className="container display:flex:column">
            <Col>
            <Form className="bg-light me-auto mt-3">
                
                <label>Coloque o id do livro</label>
                <input type="text" onChange={(e)=>setId(e.target.value)}></input>
                
            </Form>
            <Button onClick={onSubmit} className="ms-1">Deletar</Button>
            </Col>
        </div>
    )
}