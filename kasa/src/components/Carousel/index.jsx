import { useState } from "react"
import styles from "./Carousel.module.sass"

function Carousel({ images=[], altPrefix="" }) {
    
    const [i, setI] = useState(0)
    if (images.length === 0) return null

    const prev = () => setI((i - 1 + images.length) % images.length)
    const next = () => setI((i + 1) % images.length)

    return(
        <div className={ styles.carousel }>
            <img
                className={ styles.image }
                src={ images[i] }
                alt={`${altPrefix} - photo ${ i + 1 }/${ images.length }`}
            />
            { images.length > 1 && (
                <div>
                    <button
                        className={ `${ styles.chevronButton } ${ styles.chevronButtonLeft }` }
                        type="button"
                        onClick={ prev }
                    >
                        <i className={ styles.chevronLeft }></i>
                    </button>
                    <button
                        className={ `${ styles.chevronButton } ${ styles.chevronButtonRight }` }
                        type="button"
                        onClick={ next }
                    >
                        <i className={ styles.chevronRight }></i>
                    </button>
                </div>
            )}
            { images.length > 1 && (
                <p
                    className={ styles.countdown }
                    aria-live="polite"
                >
                    { i + 1}/{ images.length }
                </p>
            )}
            
        </div>
    )
}

export default Carousel