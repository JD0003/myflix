import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./reset.css"
import Home from "./components/Home/Home";
import FormularioVideo from './components/Formulario/Formulario de Videos/FormularioVideo';
import FormularioCategoria from "./components/Formulario/Formulario de Categorias/FormularioCategoria";
import { useState, useEffect } from "react";
import ActualizarCategoria from "./components/Table/ActualizarCategoria";
import { buscar,crearV, crearC, eliminarC, actualizarC } from "./components/Api/api";
function App() {
    const [videos, actualizarvideos] = useState([])
    const [categorias, actualizarcategorias] = useState([])
    
    const MostrarV = () => {
    const urlv = "/videos"
      useEffect(() => {
      buscar(urlv,actualizarvideos);
      },[urlv])
    }
    MostrarV();
    const MostrarC = () => {
      const urlc = "/categorias"
        useEffect(() => {
        buscar(urlc,actualizarcategorias);
        },[urlc])
      }
    MostrarC();
    
    

    const RegistrarVideo = (video) => {
      actualizarvideos([...videos,video ])
      crearV(video.id, video.categoria, video.codigo, video.descripcion, video.img, video.titulo, video.video)
    }

    const RegistrarCategoria = (categoria) => {
      actualizarcategorias([...categorias, categoria])
      crearC(categoria.id, categoria.categoria, categoria.descripcion, categoria.color, categoria.Seguridad)
    }

    const Eliminarcategoria = (id) => {
      const nuevoCategoria = categorias.filter((categoria) =>categoria.id !== id)
      actualizarcategorias(nuevoCategoria)
      eliminarC(id)
    }
    
    const actualizarEdicion = (categoria) =>{
      const editCategoria = categorias.map(e => e.id === categoria.id)
      actualizarcategorias([...editCategoria,categoria])
      actualizarC(categoria.id, categoria.categoria, categoria.descripcion, categoria.color, categoria.Seguridad)
    }

    const vp = videos
    const pc = categorias

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home categorias={categorias} videos={vp}/>} />
          <Route path="FormularioVideo" element={<FormularioVideo 
          RegistrarVideo={RegistrarVideo} 
          categorias={categorias.map((categorias) => categorias.categoria)}
          />}/>
          <Route path="FormularioCategoria" element={<FormularioCategoria 
          RegistrarCategoria={RegistrarCategoria}
          Eliminarcategoria={Eliminarcategoria} 
          categorias={pc}
          />}/>
          <Route path= "ActualizarCategoria/:id" element={<ActualizarCategoria
          actualizarEdicion={actualizarEdicion}
          categorias={pc}
          />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
