import "./Campo.css"

const CampoTexto = (props) => {
    const manejarCambio = (e) => {props.valorActualizar(e.target.value)}

    return <>
    <input className="CampoTexto" 
    placeholder={props.placeholder} 
    required={props.required}
    value={props.valor}
    onChange={manejarCambio}
    />
    </>
}

export default CampoTexto;