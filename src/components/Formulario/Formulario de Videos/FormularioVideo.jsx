import React from "react";
import "../Formulario.css"
import CampoTexto from "../CampoTexto";
import CampoDescription from "../CampoDescription";
import Button from "../../Button/Button";
import DefaultPage from "../../DefaultPage/DefaultPage";
import CampoCategoria from "../CampoCategoria";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
const FormularioVideo = (props) =>{

    const history = useNavigate();
    const link = () =>{history('/FormularioCategoria')}
    
    const [titulo, setTitulo] = useState("")
    const [video, setVideo] = useState("")
    const [img, setImg] = useState("")
    const [categoria, setCategoria] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [codigo, setCodigo] = useState("")

    const resetForm = () => {
        setTitulo("")
        setVideo("")
        setImg("")
        setCategoria("")
        setDescripcion("")
        setCodigo("")
    }

    const manejarEnvio = (e) =>{ 
        e.preventDefault()
        const enviarDatos = {
        id: uuidv4(),
        titulo,
        video,
        img,
        categoria,
        descripcion,
        codigo
    } 
    props.RegistrarVideo(enviarDatos) 
    resetForm();
    history('/');
}

    const fv =<> <section className="C_Formulario">
        <form onSubmit={manejarEnvio} onReset={resetForm} className="formularioV">
        <h2 className="T_Formulario">Nuevo video</h2>
        <CampoTexto placeholder="Título" valor={titulo} valorActualizar={setTitulo} required/>
        <CampoTexto placeholder="Link del video" valor={video} valorActualizar={setVideo} required/>
        <CampoTexto placeholder="Link imagem del video" valor={img} valorActualizar={setImg} required/>
        <CampoCategoria placeholder="Escoja una categoría" valor={categoria} categorias={props.categorias} valorActualizar={setCategoria} required/>
        <CampoDescription placeholder="Descripción" valor={descripcion} valorActualizar={setDescripcion} required/>
        <CampoTexto placeholder="Código de seguridad" valor={codigo} valorActualizar={setCodigo} required/>
        <div className="B_formularios">
            <Button type="submit" className="B_Guardar" titulo="Guardar"/>
            <Button type="reset"  className="B_Limpiar"  titulo="Limpiar"/>
            <Button type="button" className="B_Catalogo" titulo="Nueva Categoría" click={link}/>
            </div></form>
    </section>
    
    </>
        
    return <DefaultPage conteiner={fv} />

}

export default FormularioVideo;