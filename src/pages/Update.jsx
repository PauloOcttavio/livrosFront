import { useState } from "react"
import { AtualizarNutricionista } from "../services/put"
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
export function Update(){
    const {register,handleSubmit,formState: {errors}} = useForm()
    const [id, setId] = useState([])
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await AtualizarNutricionista(id,data)
    }
    return(
        <Container>
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50 m-auto">
                <Col>
                    <input 
                        className="mt-3"
                        type="text"
                        name="id"
                        id="id"
                        required
                        placeholder="Insira o id do usuario"
                        {...register('id', {
                            required: 'id é obrigatório'
                        })}
                        onChange={(e)=>setId(e.target.value)}
                    ></input>
                     <input 
                     className="mt-3"
                        type="text"
                        name="nome"
                        id="nome"
                        required
                        placeholder="Insira o nome do usuario"
                        {...register('nome', {
                            required: 'Nome é obrigatório'
                        })}
                    ></input>
                    <input 
                    className="mt-3"
                        type="text"
                        name="crn"
                        id="crn"
                        required
                        placeholder="Insira o crn do usuario"
                        {...register('crn', {
                            required: 'crn é obrigatório'
                        })}
                    ></input>
                    <Button type="submit" className="mt-3">Cadastrar</Button>
                </Col>
            </Form>
           
        </Container>
    )
}
