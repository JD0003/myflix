import "./Campo.css"

const CampoDescription = (props) => {
    const manejarCambio = (e) => {props.valorActualizar(e.target.value)}

    return <>
    <textarea className="CampoDescription" 
    placeholder={props.placeholder} 
    required={props.required}
    value={props.valor}
    onChange={manejarCambio}
    />
    </>
}

export default CampoDescription;