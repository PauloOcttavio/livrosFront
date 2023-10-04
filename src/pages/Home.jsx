import React from 'react';
import { Container } from 'react-bootstrap';
import {UserCard,LivroCard, LivrosPorEditora} from './Dashboard';
import { BarChartLivros } from './Dashboard';
const Home = () => {
    return (
        <>
        <Container>
            <Container className='d-flex  mt-3 ms-1'>
                <Container className='d-flex flex-column '>
                <UserCard></UserCard>
                <LivroCard></LivroCard>
                </Container>
            <LivrosPorEditora></LivrosPorEditora>
            </Container>
            <Container className='mt-3'>

               <BarChartLivros></BarChartLivros>
            </Container>
        </Container>
        </>
    )
}
export default Home;