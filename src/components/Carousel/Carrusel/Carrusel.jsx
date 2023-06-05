import "./Carrusel.css"
import Sliders from "../Slider/Sliders"

const Carrusel = (props) =>{

    const Bc = {backgroundColor: props.datos.color}

    const { videos } = props

    return <> { videos.length > 0 &&
        <section className="Carrusel">
        <div className="C_T" style={Bc}> 
        <h3 className="Titles_Carrusel">{props.categoria}</h3> </div>
        <div className="Cards">
            <Sliders videos={videos}/>
        </div>
    </section>} </>
}

export default Carrusel