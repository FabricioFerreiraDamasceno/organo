import './formulario.css'
import { FieldText } from '../fieldText/fieldtext'
import { ListSuspend } from '../listSuspend/listSuspend.js'
import { ButtonCreate } from '../button/button.js'
import { useState } from 'react'


export const Formulario =(props)=>{
   
      const [nome, setNome]= useState()
      const [cargo, setCargo]= useState()
      const[imagem, setImagem]= useState()
      const[time, setTime] = useState()

     const OnSave=(e)=>{
       e.preventDefault()
       props.employers({
        nome,
        cargo,
        imagem,
        time
       })
       setNome('')
       setCargo(' ')
       setImagem(' ')
       setTime(' ')
     }
     
    return( 

      <section className="Formulario">
            <form onSubmit={OnSave}>
                <h2>Preencha os dados para criar o card do colaborador </h2>
                <FieldText 
                obrigatorio={true}
                 label="Nome" 
                 placeholder="Digite seu nome"
                 value={nome}
                 inputModify={nome=> setNome(nome)}/>

                <FieldText 
                obrigatorio={true} 
                label="Cargo"
                 placeholder="Digite seu cargo"
                 value={cargo}
                 inputModify={cargo => setCargo(cargo)}/>

                <FieldText 
                label="Imagen" 
                placeholder="Digite o endereço da imagem"
                value={imagem}
                inputModify={imagem => setImagem(imagem)}
                />

                <ListSuspend 
                obrigatorio={true}
                 label="Time" 
                 itens={props.times}
                 value={time}
                 inputModify={time => setTime(time)}/>
                <ButtonCreate>
                    Criar Card
                </ButtonCreate>
            </form>
      </section>
    )
}