import { useEffect,useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';


export function ListagemLivros(){
    const [list, setList] = useState([])
    const read = async()=>{
        const resposta =await axios.get('http://localhost:8080/livro')
        console.log(resposta.data)
        setList(resposta.data)
    }  

    useEffect(()=>{read()},[])
    return(
        <>
        <Container onClick={read}><Button>Listagem</Button></Container >
        <Container variant="primary">
            
        
        <ul>
          {list.map((lists)=>(<li key={lists.id}>{lists.nome}</li>))}
        </ul>
      
        </Container>
        </>
    )
}