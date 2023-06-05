import "../Formulario/Formulario.css"
import CampoTexto from "../Formulario/CampoTexto";
import CampoDescription from "../Formulario/CampoDescription";
import Button from "../Button/Button";
import DefaultPage from "../DefaultPage/DefaultPage";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ActualizarCategoria = (props) =>{
    const param = useParams()
    const history = useNavigate();
    console.log(param,props.categorias)

    const categoria = props.categorias.find((categoria => categoria.id === param.id))

    const [Nombre, setNombre] = useState(categoria.categoria)
    const [descripcion, setDescripcion] = useState(categoria.descripcion)
    const [color, setColor] = useState(categoria.color)
    const [Seguridad, setSeguridad] = useState(categoria.Seguridad)


    const resetForm = () => {
        setNombre("")
        setDescripcion("")
        setColor("")
        setSeguridad("")
    }

    const manejarEnvio = (e) =>{ 
        e.preventDefault()
        const enviar = {
        id: param.id,
        categoria: Nombre,
        descripcion,
        color,
        Seguridad
    }
    props.actualizarEdicion(enviar) 
    resetForm();
    history('/');
    window.location.reload('/');
}

    const ChanegeColor = (e) => {setColor(e.target.value)}
    
    const fv = <> <section className="C_Formulario">

        <form onSubmit={manejarEnvio} onReset={resetForm} className="formularioV">
        <h2 className="T_Formulario">Cambiar categoría</h2>
        <CampoTexto placeholder="Nombre" valor={Nombre} valorActualizar={setNombre} required/>
        <CampoDescription placeholder="Descripción" valor={descripcion} valorActualizar={setDescripcion} required/>
        <label className="ColorL">Color</label>
        <input className="Color" type="color" placeholder="Color" value= {color} onChange={ChanegeColor} required/>
        <CampoTexto placeholder="Código de seguridad" valor={Seguridad} valorActualizar={setSeguridad}  required/>
        <div className="B_formularios">
            <Button className="B_Guardar" type="submit" titulo="Guardar"/>
            <Button className="B_Limpiar" type="reset" titulo="Limpiar"/></div></form>

    </section></>
        
    return <DefaultPage conteiner={fv} />


}
export default ActualizarCategoria;