import Banner from "../../components/Banner"
import Gallery from "../../components/Gallery"
import homeImage from "../../assets/coastBanner.png"

import styles from "../../components/Banner/Banner.module.sass"

function Home() {
    return(
        <div>
            <Banner image={ homeImage } alt="La mer s'écrasant sur la côte">
                Chez vous, <br className={ styles.mobileBreak } />partout et ailleurs
            </Banner>
            <Gallery />
        </div>
    )
}

export default Home