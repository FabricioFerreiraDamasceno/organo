import { CardEmployer } from '../cardEmployer/cardEmployer'
import './time.css'


export const Time = (props)=>{
    const css = {backgroundColor: props.colorSecundary}
     return(

        (props.employer.length > 0) && <section className="Time" style={css}>
             <h3 style={{borderColor: props.colorPrimary}}> {props.nome}</h3>
             <div className="colaboradores">
             {props.employer.map(employer => <CardEmployer
              backColor={props.colorPrimary}
              key={employer.nome}
              nome={employer.nome}
              cargo={employer.cargo}
              imagem={employer.imagem}/>)}
             </div>
          </section>
     )

}