import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import homeImage from "../../assets/coastBanner.png"

function Home() {
    return(
        <div>
            <Banner image={ homeImage } alt="La mer s'écrasant sur la côte">
                Chez vous, partout et ailleurs
            </Banner>
            <Gallery />
        </div>
    )
}

export default Home