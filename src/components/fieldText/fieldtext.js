
import './fieldText.css'





export const FieldText  =(props)=>{

 
  const Input = (e) => {
    props.inputModify(e.target.value)
     
  
  }

    return(
        <div className="FieldText">
          <label>{props.label}</label>
          <input value={props.input} onChange={Input} required={props.obrigatorio} type="text" placeholder={props.placeholder}/>
        </div>
    )
}