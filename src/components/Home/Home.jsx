import React from "react";
import "./Home.css"
import DefaultPage from "../DefaultPage/DefaultPage";
import Banner from "../Banner/Banner";
import Button from "../Button/Button";
import { useNavigate } from 'react-router-dom';
import Carrusel from "../Carousel/Carrusel/Carrusel";

const Home = (props) =>{

    const history = useNavigate();

    const link = () =>{history('/FormularioVideo')}

    const Bn = <Button className="B_home" titulo="Nuevo Video" click={link}/>
    const { videos, categorias } = props

    const contenido = <>
    <Banner/> 
    {categorias.map( (categoria, index)=> <Carrusel key={index}  
        datos={categoria} 
        categoria={categoria.categoria} 
        videos={videos.filter( video => video.categoria === categoria.categoria)}/>
        )}
        </> 

    return <DefaultPage button={Bn} conteiner = {contenido}
    />

}

export default Home;