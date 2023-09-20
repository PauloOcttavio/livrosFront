import { useState } from "react"
import { PutUsuario, atualizarUsuario } from "../services/put"
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
import { UpdateLivros } from "./UpdateLivros"
export function Update(){
    const {register,handleSubmit,formState: {errors}} = useForm()
    const [id, setId] = useState([])
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await PutUsuario(id,data)
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
                        type="password"
                        name="senha"
                        id="senha"
                        required
                        placeholder="Insira a senha do usuario"
                        {...register('senha', {
                            required: 'senha é obrigatório'
                        })}
                    ></input>
                    <input 
                    className="mt-3"
                        type="text"
                        name="email"
                        id="email"
                        required
                        placeholder="Insira o email"
                        {...register('email', {
                            required: 'email é obrigatório'
                        })}
                    ></input>
                    <input 
                    className="mt-3"
                        type="text"
                        name="telefone"
                        id="telefone"
                        required
                        placeholder="Insira a telefone do usuario"
                        {...register('telefone', {
                            required: 'telefone é obrigatório'
                        })}
                    ></input>
                    <Button type="submit" className="mt-3">Cadastrar</Button>
                </Col>
            </Form>
           
        </Container>
    )
}
