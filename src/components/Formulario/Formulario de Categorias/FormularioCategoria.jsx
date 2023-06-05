import "../Formulario.css"
import CampoTexto from "../CampoTexto";
import CampoDescription from "../CampoDescription";
import Button from "../../Button/Button";
import DefaultPage from "../../DefaultPage/DefaultPage";
import Table from "../../Table/Table";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';

const FormularioCategoria = (props) =>{

    const [Nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [color, setColor] = useState("")
    const [Seguridad, setSeguridad] = useState("")

    const history = useNavigate();

    const resetForm = () => {
        setNombre("")
        setDescripcion("")
        setColor("")
        setSeguridad("")
    }
    
    const manejarEnvio = (e) =>{ 
        e.preventDefault()
        const enviar = {
        id: uuidv4(),
        categoria: Nombre,
        descripcion,
        color,
        Seguridad
    }
    props.RegistrarCategoria(enviar) 
    resetForm();
    history('/FormularioVideo');
}

    const ChanegeColor = (e) => {setColor(e.target.value)}
    
    const fv = <> <section className="C_Formulario">

        <form onSubmit={manejarEnvio} onReset={resetForm} className="formularioV">
        <h2 className="T_Formulario">Nueva categoría</h2>
        <CampoTexto placeholder="Nombre" valor={Nombre} valorActualizar={setNombre} required/>
        <CampoDescription placeholder="Descripción" valor={descripcion} valorActualizar={setDescripcion} required/>
        <label className="ColorL">Color</label>
        <input className="Color" type="color" placeholder="Color" value= {color} onChange={ChanegeColor} required/>
        <CampoTexto placeholder="Código de seguridad" valor={Seguridad} valorActualizar={setSeguridad}  required/>
        <div className="B_formularios">
            <Button className="B_Guardar" type="submit" titulo="Guardar"/>
            <Button className="B_Limpiar" type="reset" titulo="Limpiar"/></div></form>
        <Table categorias={props.categorias} Eliminarcategoria={props.Eliminarcategoria}/>

    </section></>
        
    return <DefaultPage conteiner={fv} />


}

export default FormularioCategoria;