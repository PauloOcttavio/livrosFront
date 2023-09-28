import { useEffect,useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { DeletarUsuario } from '../services/delete';
import Create from "./Create"
import Popup from "reactjs-popup"
import axios from 'axios';


export function Listagem(){
    const [list, setList] = useState([])
    const [id,setId] = useState("")
    const read = async()=>{
        const resposta =await axios.get('http://localhost:8080/usuario')
        console.log(resposta.data)
        setList(resposta.data)
    }  
    async function deletar(){
      const delet = await DeletarUsuario(id)
    }

    useEffect(()=>{read()},[])
    return(
        <>
        <Container fluid className='bg-light h-50 mh-25'>
          <Popup trigger={<Button size='sm' variant='info' className='text-light'>create +</Button>}>
            <Container className='modal'>
            <Create></Create>
            </Container>
          </Popup>
            
        </Container>
        
                <ul>

                  {list.map((lists)=>(<Container className='bg-light mt-2 d-flex justify-content-between'>
                    <Container>
                      <ul className='list-unstyled'><li key={lists.id}>{lists.nome}</li></ul>
                      </Container>
                    <Container className='d-flex justify-content-end'>
                      <Button variant='outline-success' className='me-2'>editar</Button>
                      <Button variant='outline-danger' >Deletar</Button>
                    </Container></Container>))}
                  
                </ul>
            

        </>
    )
}