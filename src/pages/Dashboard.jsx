import { Card, Text, Metric, Flex, BarChart,DonutChart, Title } from "@tremor/react";
import { useState,useEffect } from "react";
import axios from "axios";

const  UserCard= () => {
  const [list,setList]= useState([])
  const read = async()=>{
    const resposta =await axios.get('http://localhost:8080/numerodeusuarios')
    setList(resposta.data)
}  
useEffect(()=>{read()},[])
  return(
    <Card  className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Número de Usuarios</Text>
    <Metric>{list}</Metric>
  </Card>
  )
  
};

const  LivroCard= () => {
  const [list,setList]= useState("")
  const read = async()=>{
    const resposta =await axios.get('http://localhost:8080/numerodelivros')
    setList(resposta.data)
}  
useEffect(()=>{read()},[])
  return(
    <Card  className="max-w-xs mx-auto" decoration="top" decorationColor="indigo">
    <Text>Número de livros</Text>
    <Metric>{list}</Metric>
  </Card>
  )
  
};

const LivrosPorEditora =()=> {
  const editoras= [{
    nome:"Saraiva",
    quantia:5
  },
  {
    nome:"Caminho",
    quantia:4
  },
  {
    nome:"Mato Grosso",
    quantia:4
  },
  ]
  const valueFormatter = (number) => ` ${Intl.NumberFormat("us").format(number).toString()}`;
  return(
    <>
    <Card  className="max-w-xs mx-auto mt-3" decoration="top" decorationColor="indigo">
       <Title>Editoras</Title>
       <DonutChart
         className="mt-6"
         data={editoras}
         category="quantia"
         index="nome"
         valueFormatter={valueFormatter}
         colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
       />
    </Card>
     </>
  )
}
 const BarChartLivros= () =>{

const chartdata = [
  {
    name: "Agosto",
    "livros": 2488,
  },
  {
    name: "Setembro",
    "livros": 1445,
  },
  {
    name: "Outubro",
    "livros": 743,
  },
];

const dataFormatter = (number) => {
  return  Intl.NumberFormat("us").format(number).toString();
};
return(
  <Card>
    <Title>Número de livros adicionados por mês</Title>
    <BarChart
      className="mt-6"
      data={chartdata}
      index="name"
      categories={["livros"]}
      colors={["blue"]}
      valueFormatter={dataFormatter}
      yAxisWidth={48}
    />
  </Card>
)
  

 }
export {BarChartLivros, UserCard, LivroCard, LivrosPorEditora}