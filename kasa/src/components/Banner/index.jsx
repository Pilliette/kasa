import styles from "./Banner.module.sass"

function Banner({ image, alt="", children, light=false }) {
    return(
        <div className={ `${ styles.banner } ${ light ? styles.light : "" }` }>
            <img className={ styles.photoBanner } src={ image } alt={ alt } />
            { children && <h1 className={ styles.titleBanner }>
                { children }
            </h1> }
        </div>
    )
}

export default Banner