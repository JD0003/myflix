import "./Banner.css"
import imgBanner from "../assets/Banner.png"

const Banner = () => {
    return <section className="C_banner">
        <div>
            <img className="img_banner" src={imgBanner} alt="banner"/>
        </div>
    </section>
}

export default Banner