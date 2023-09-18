import { useEffect,useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { api } from "../services/api";


export function Listagem(){
    const [list, setList] = useState([])
    const read = async()=>{
         
         const resposta = api.get('/nutricionistas')
         resposta.map((json)=>setList(<li key={json.json.id}>{json.json.nome}</li>))
    }  
    
    useEffect(()=>{
        read()
    },[])
    return(
        <>
        <Container onClick={read}><Button>Listagem</Button></Container >
        <Container variant="primary">
            <ul>
           {list}
           </ul>
        </Container>
        </>
    )
}