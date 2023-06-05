import axios from "axios";

//id, categoria, codigo, descripcion, img, titulo, video
//id, categoria, descripcion, color, Seguridad

const url = "http://localhost:5000"

export const api = axios.create({
    baseURL: url
})

//GET
export const buscar = async (url, setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
}

//POST
export const crearV = async (id, categoria, codigo, descripcion, img, titulo, video) => {
    await api.post("http://localhost:5000/videos", {
        id:id, 
        categoria: categoria, 
        codigo: codigo, 
        descripcion:descripcion, 
        img:img, 
        titulo: titulo, 
        video:video
    })}

export const crearC = async (id, categoria, descripcion, color, Seguridad) => {
    await api.post("http://localhost:5000/categorias", {
        id:id, 
        categoria:categoria, 
        descripcion:descripcion, 
        color:color, 
        Seguridad:Seguridad
    })}


//PUT
export const actualizarC = async (id, categoria, descripcion, color, Seguridad) => {
    await api.put(`http://localhost:5000/categorias/${id}`, {
        id:id, 
        categoria:categoria, 
        descripcion:descripcion, 
        color:color, 
        Seguridad:Seguridad
    })}

//DELETE
export const eliminarC = async (id) => {
    await api.delete(`http://localhost:5000/categorias/${id}`)}