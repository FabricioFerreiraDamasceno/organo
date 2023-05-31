 import './listSuspend.css'

 export const ListSuspend =(props)=>{

    return(

        <div className='ListSuspend'>
            <label>{props.label}</label>

            <select onChange={e => props.inputModify(e.target.value)} required={props.required} value={props.valor}>
                <option value=""></option>
                {props.itens.map(item=> <option key={item}>{item}</option>)}
            </select>

        </div>
    )
 }