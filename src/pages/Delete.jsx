import { Button,Form } from "react-bootstrap"
import { DeletarNutricionista } from "../services/delete"
import { useState } from "react"
export function Delete() {
    const [id,setId] = useState("1")
    const onSubmit= async()=>{
        const delet = await DeletarNutricionista(id)
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