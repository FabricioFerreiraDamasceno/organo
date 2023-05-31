import  './button.css'

export const ButtonCreate =(props)=>{
    return(
        <button className='Button'>
           {props.children}
        </button>
    )
}