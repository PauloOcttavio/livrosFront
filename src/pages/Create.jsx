import { PostUsuario, criarUsuario } from "../services/post";
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
import { Modal, Card,CardContent, } from "@mui/material";
import { useState } from "react";
function Create() {
    const {register,handleSubmit,formState: {errors}} = useForm()
    const [openModal, setOpenModal] = useState(false)
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await PostUsuario(data)
       setOpenModal(true)
    }
    return(
        <Container fluid="sm">
            <h1 className="m-auto">Criar usuario</h1>
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light  p-5 shadow d-flex flex-column mh-m m-auto mt-3">
                
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
                        placeholder="Insira a senha usuario"
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
                            required: 'email é obrigatório',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "este não é um email valido",
                              },
                        })}
                        
                    ></input>{errors.email && <span role="alert">{errors.email.message}</span>}
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
                    <Button type="submit">Cadastrar</Button>
                
            </Form>
            <Modal open={openModal} onClose={(e) => setOpenModal(false)}>
                            <Card>
                                <CardContent>
                                    <h2>criado com sucesso</h2>
                                </CardContent>
                            </Card>
                        </Modal>
        </Container>
    )
}
export default Create