import "./Table.css"
import { useNavigate } from "react-router-dom";

const Table = (props)=>{

    const history = useNavigate();
    //
    return <table>
        <thead><tr><th>Nombre</th><th>Descripción</th><th>Editar</th><th>Remover</th></tr></thead>
        <tbody><>
            {props.categorias.map( (categoria, index) => <tr key={index}>
                <td>{categoria.categoria}</td>
                <td>{categoria.descripcion}</td>
                <td><button className="b_t"
                onClick={() => {history(`/ActualizarCategoria/${categoria.id}`) }} 
                >Editar</button>  </td>
                <td><button className="b_t" 
                onClick={() => props.Eliminarcategoria(categoria.id)}>Remover</button></td>
                </tr>)}
            </>
        </tbody>
    </table>
}

export default Table