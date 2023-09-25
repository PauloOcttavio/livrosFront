import { useEffect,useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import axios from 'axios';


export function Listagem(){
    const [list, setList] = useState([])
    const read = async()=>{
        const resposta =await axios.get('http://localhost:8080/usuario')
        console.log(resposta.data)
        setList(resposta.data)
    }  

    useEffect(()=>{read()},[])
    return(
        <>
        
        <Container className="bg-light rounded p-5 shadow w-50  m-auto mt-3">
          <Button onClick={read}>Listagem de usuarios</Button>  
                <ul>

                  {list.map((lists)=>(<Container className='bg-secondary-bg mt-2'><li key={lists.id}>{lists.nome}</li></Container>))}
                  
                </ul>
            
        </Container>
        </>
    )
}