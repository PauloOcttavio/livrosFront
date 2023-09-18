import { CriarNutricionista } from "../services/post";
import {Form,Button,Container,Col} from "react-bootstrap"
import {useForm} from "react-hook-form"
export function Create(){
    const {register,handleSubmit,formState: {errors}} = useForm()
    
    const onSubmit = async(data)=>{
        console.log(data)
       const criar = await CriarNutricionista(data)
        
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
                        placeholder="Insira o nome do usuario"
                        {...register('nome', {
                            required: 'Nome é obrigatório'
                        })}
                    ></input>
                    <input 
                        type="password"
                        name="senha"
                        id="senha"
                        required
                        placeholder="Insira a senha usuario"
                        {...register('crn', {
                            required: 'crn é obrigatório'
                        })}
                    ></input><Button type="submit">Cadastrar</Button>
                </Col>
            </Form>
           
        </Container>
    )
}