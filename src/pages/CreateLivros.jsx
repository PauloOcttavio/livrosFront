
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
import { PostLivro, criarLivros } from "../services/postlivros";
export function CreateLivros(){
    const {register,handleSubmit,formState: {errors}} = useForm()
    
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await PostLivro(data)
        
    }
    return(
        <Container>
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50 m-auto">
                <Col>
                    <input 
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
                        type="file"
                        name="imagem"
                        id="imagem"
                        required
                        placeholder="Insira a imagem usuario"
                        {...register('imagem', {
                            required: 'imagem é obrigatório'
                        })}
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
           
        </Container>
    )
}
  