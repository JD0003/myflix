import "./Campo.css"


const CampoCategoria = (props) =>{

    const manejarCambio = (e) => {props.valorActualizar(e.target.value)}

    return <select className="CampoCategoria" value={props.valor} onChange={manejarCambio} required>
        <option value="" defaultValue="" disabled hidden>{props.placeholder}</option>
        {props.categorias.map( (categoria, index) => <option key={index} value={categoria}>{categoria}</option>)}
    </select>
}

export default CampoCategoria