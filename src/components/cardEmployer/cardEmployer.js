import './cardEmployer.css'

export const CardEmployer =(props)=>{
    return(
        <div className="colaborador">
              <div className="cabecalho" style={{backgroundColor: props.backColor}}>
                 <img src={props.imagem} alt={props.nome}/>
              </div>

            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
      
    )
}