import "./VideoCard.css"

const VideoCard = (props) => {
    return <div className="VideoCard" key={props.key}>
        <a href={props.datos.video}><img src={props.datos.img} alt={props.datos.titulo}/></a>
        </div>
}

export default VideoCard