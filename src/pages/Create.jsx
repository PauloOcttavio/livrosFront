import { PostUsuario, criarUsuario } from "../services/post";
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
const Create=()=>{
    const {register,handleSubmit,formState: {errors}} = useForm()
    
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await PostUsuario(data)
        
    }
    return(
        <Container>
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50 m-auto mt-3">
                <Col>
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
                    <Button type="submit">Cadastrar</Button>
                </Col>
            </Form>
           
        </Container>
    )
}
export default Create