import { Button,Container,Form } from "react-bootstrap"
import { DeletarUsuario, deletarUsuario } from "../services/delete"
import { useState } from "react"
export function Delete() {
    const [id,setId] = useState("")
    const onSubmit= async()=>{
        const delet = await DeletarUsuario(id)
    }
    
    return(
        <Container className="bg-light rounded p-5 shadow w-50  m-auto mt-3">
            <Form >
                <label>Coloque o id do usuario</label>
                <input type="text" onChange={(e)=>setId(e.target.value)}></input>
            </Form>
            <Button onClick={onSubmit} className="ms-1">Deletar</Button>
        </Container>
    )
}