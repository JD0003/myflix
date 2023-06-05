import React from "react";
import Slider from "react-slick";
import VideoCard from "../VideoCard/VideoCard";


const Sliders = (props) =>{
    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2
    };

    return <div><Slider {...settings}>
            {props.videos.map( (video, index) => <VideoCard datos={video} key={index}/>)}
        </Slider></div>
}

export default Sliders
