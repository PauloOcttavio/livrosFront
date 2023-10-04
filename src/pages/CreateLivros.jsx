import { Modal,Card,CardContent } from "@mui/material";
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
import { PostAutor, PostLivro } from "../services/postlivros";
import { useState } from "react";
export function CreateLivros(){
    const {register,handleSubmit,formState: {errors}} = useForm()
    const [openModal, setOpenModal] = useState(false)
    const onSubmit = async(data)=>{
       const criar = await PostLivro(data)
       setOpenModal(true)
       const autor = await PostAutor(data)
    }
    return(
        <Container>
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50 m-auto">
                <Col>
                    <input
                        className="mt-3" 
                        type="text"
                        name="nome"
                        id="nome"
                        required
                        placeholder="Insira o nome do livro"
                        {...register('nome', {
                            required: 'Nome é obrigatório'
                        })}
                    ></input>
                    <input
                        className="mt-3" 
                        type="file"
                        name="imagem"
                        id="imagem"
                        required
                        placeholder="Insira a imagem do livro"
                        {...register('imagem', {
                            required: 'imagem é obrigatória'
                        })}
                    ></input>
                    <input 
                        className="mt-3"
                        type="text"
                        name="autor"
                        id="autor"
                        required
                        placeholder="Insira o autor do livro"
                        {...register('autor')}
                    ></input>
                    <input 
                    className="mt-3"
                        type="text"
                        name="editora"
                        id="editora"
                        required
                        placeholder="Insira o editora"
                        {...register('editora', {
                            required: 'editora é obrigatório'
                        })}
                    ></input>
                    <Button type="submit">Enviar</Button>
                </Col>
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
  