import { Button,Form } from "react-bootstrap"
import { DeletarUsuario, deletarUsuario } from "../services/delete"
import { useState } from "react"
export function Delete() {
    const [id,setId] = useState("")
    const onSubmit= async()=>{
        const delet = await DeletarUsuario(id)
    }
    
    return(
        <div className="container">
            <Form className="bg-light me-auto mt-3">
                <label>Coloque o id do usuario</label>
                <input type="text" onChange={(e)=>setId(e.target.value)}></input>
            </Form>
            <Button onClick={onSubmit} className="ms-1">Deletar</Button>
        </div>
    )
}