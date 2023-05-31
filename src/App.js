
import { useState } from 'react';
import { Banner } from './components/banner/banner.js';
import { Formulario } from './components/formulario/formulario.js';
import { Time } from './components/time/time.js';


function App() {
   const times =[{
    nome:"Programação",
    colorPrimary:" #57C278",
    colorSecundary:"#D9F7E9", 
   },
   {
    nome:"Front-End",
    colorPrimary:"#82cffa",
    colorSecundary:"#e8f8ff", 
   },
   {
    nome:"Data Science",
    colorPrimary:"#a6d157",
    colorSecundary:"#f0f8e2", 
   },
   {
    nome:"Devops",
    colorPrimary:"#e06869",
    colorSecundary:"#fde7e8", 
   },
   {
    nome:"UX e Dising",
    colorPrimary:"#db6e8f",
    colorSecundary:"#fae9f5", 
   },
   {
    nome:"Mobile",
    colorPrimary:"#ff8a05",
    colorSecundary:"#fff5d9", 
   },
   {
    nome:"Inovação e Gestão",
    colorPrimary:"#ff8a29",
    colorSecundary:"#ffeedf", 
   },]

   const [employer, setEmployer]= useState([])

   const newEmployers =(employe)=>{
     setEmployer([
      ...employer, employe
     ])
   } 
  return (

    <div className="App">
      <Banner/>
      <Formulario times={times.map(time => time.nome)} employers={employer => newEmployers(employer)}/>
       {times.map(time => <Time 
        key={time.nome} 
       nome={time.nome}
       colorPrimary={time.colorPrimary}
       colorSecundary={time.colorSecundary}
       employer ={employer.filter(employer => employer.time === time.nome)}
       />)}
       
    
   
   </div>
  );
}

export default App;
