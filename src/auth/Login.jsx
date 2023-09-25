import React from "react";
import { Button, Col, Container, Form} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Login = () => {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: {errors}} = useForm()
    const onSubmit = async(data)=>{
        return await axios.post("http://localhost:8080/login",data)
        .then((response) => {
            const dados = response.data;
            const token = dados.token;
            if (!token) {
                alert('falha no login, tente novamnte');
                return;
            }
            localStorage.clear();
            localStorage.setItem('user-token', token);
            setTimeout(() => {
                navigate('/');
            }, 500);
            })
    }
    return(
        <Container className="display:flex-column align">
            <Form noValidate validated={!!errors} onSubmit={handleSubmit(onSubmit)}
                className="bg-light rounded p-5 shadow w-50  m-auto mt-3">
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
                        {...register('senha', {
                            required: 'senha é obrigatório'
                        })}
                    ></input>
                    <Button type="submit">Fazer log in</Button>
            </Form>
           
        </Container>
    )

}
export default Login;