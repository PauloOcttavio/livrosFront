import { useEffect,useState } from 'react';
import { DeletarUsuario } from '../services/delete';
import { Link as RouterLink } from "react-router-dom";
import Create from "./Create"
import axios from 'axios';
import {
    Button,
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Modal,
    Card,
    CardContent,
    CardActions,
    Typography,
    TablePagination,
} from "@mui/material"
import { useUser } from '../components/useContext';

export function Listagem(){
    const [borrowedBook, setBorrowedBook] = useState([])
    const [userId,setUserId]= useState("")
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const [activeBookIsbn, setActiveBookIsbn] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const { isAdmin, user } = useUser()

    const [list, setList] = useState([])
    const [id,setId] = useState("")
    const read = async()=>{
        const resposta =await axios.get('http://localhost:8080/usuario')
        console.log(resposta.data)
        setList(resposta.data)
    }  
    const deletar = async()=> {
      const delet = await DeletarUsuario(`${userId}`)
    }

    useEffect(()=>{read()},[])
    return(
        <>
            <div>
                <Typography variant="h5">Usuarios</Typography>
                
                    <Button variant="contained" color="primary" component={RouterLink} to="/createUsuario">
                        Criar +
                    </Button>
                
            </div>
            {list.length > 0 ? (
                <>
                    <div>
                        <TableContainer component={Paper}>
                            <Table stickyHeader>
                                <TableHead>
                                    <TableRow>
                                         <TableCell omponent="th" scope="row">ID</TableCell>
                                        <TableCell omponent="th" scope="row">Nome</TableCell>
                                        <TableCell omponent="th" scope="row">Email</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {(rowsPerPage > 0
                                        ? list.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : list
                                    ).map((lists) => (
                                        <TableRow key={lists.id}>
                                            <TableCell component="th" scope="row">
                                                {lists.id}
                                            </TableCell>
                                            <TableCell component="th" scope="row">{lists.nome}</TableCell>
                                            <TableCell component="th" scope="row">{lists.email}</TableCell>
                                                <TableCell  align="right">
                                                        
                                                            <Button
                                                                variant="contained"
                                                                color="primary"
                                                                component={RouterLink}
                                                                size="small"
                                                                to={`/putUsuario/${lists.id}`}
                                                            >
                                                                Edit
                                                            </Button>
                                                  </TableCell >
                                                            <TableCell  align="right">
                                                            <Button
                                                                variant="contained"
                                                                color="error"
                                                                size="small"
                                                                onClick={(e) => {
                                                                    setUserId(lists.id)
                                                                    setOpenModal(true)
                                                                }}
                                                            >
                                                                Delete
                                                            </Button>
                                                        
                                                   
                                               
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            onRowsPerPageChange={(e) => {
                                setRowsPerPage(parseInt(e.target.value, 10))
                                setPage(0)
                            }}
                            component="div"
                            count={list.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={(e, newPage) => setPage(newPage)}
                        />
                        <Modal open={openModal} onClose={(e) => setOpenModal(false)}>
                            <Card>
                                <CardContent>
                                    <h2>Você tem certeza?</h2>
                                </CardContent>
                                <CardActions>
                                    <Button variant="contained" onClick={() => setOpenModal(false)}>
                                        Cancel
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={deletar}>
                                        Delete
                                    </Button>
                                </CardActions>
                            </Card>
                        </Modal>
                    </div>
                </>
            ) : (
                <Typography variant="h5">No list found!</Typography>
            )}

                    </>
                )
            }
        