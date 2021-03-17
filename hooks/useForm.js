import {useState} from 'react'

/* --esto se usa en la funcion donde se va usar useForm--
const { subscribe, inputs, handleSubmit } = useForm ( initialState, onSubmit )
subscribe('nombre del campo')  --se llama en el onchangetex--
inputs.valordelcampo  --se llama en el value del input--
handleSubmit  --sellama en el onpres del boton de envio-- */

export default (initialState, onsubmit) => {
    const [inputs, setInputs] = useState(initialState)
    
    const subscribe = field => value => {
        setInputs({...inputs, [field]: value })
    }
    
    const handleSubmit = () => {
        onsubmit(inputs)
    } 
    return { subscribe, handleSubmit, inputs}
}