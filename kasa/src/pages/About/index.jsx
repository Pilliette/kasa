import Banner from "../../components/Banner"
import Values from "../../components/Values"
import aboutImage from "../../assets/mountainBanner.png"

function About() {
    return(
        <div>
            <Banner image={ aboutImage } alt="Rivière qui serpente au milieu des montagnes" light />
            <Values />
        </div>
    )
}

export default About