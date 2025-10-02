import { useState, useId } from "react"
import styles from "./Description.module.sass"

function Item({ subtitle, children }) {

    const [open, setOpen] = useState(false)
    const itemId = useId()

    return(
        <div className={ `${open ? styles.itemOpen : ""}` }>
            <div className={ styles.subtitleContainer }>
                <h3 className={ styles.subtitle }>{ subtitle }</h3>
                <button
                    type="button"
                    className={ styles.chevronUpButton }
                    aria-expanded={ open }
                    aria-controls={ itemId }
                    onClick={() => setOpen(o => !o)}
                >
                    <i
                        aria-hidden="true"
                        className={ open ? styles.chevronDown : styles.chevronUp }
                    />
                </button>
            </div>
            <p
                id={ itemId }
                className={ styles.descriptionSummary }
                hidden={ !open }
            >
                { children }
            </p>
        </div>
    )

}

function Description() {
    return(
        <div>
            <div className={ styles.descriptionHeader }>
                <div>
                    <h2 className={ styles.title }>Cozy loft on the Canal Saint-Martin</h2>
                    <p className={ styles.location }>Paris, Île-de-France</p>
                </div>
                <div className={ styles.profile }>
                    <p className={ styles.name }>Alexandre Dumas</p>
                    <img className={ styles.avatar } />
                </div>
            </div>
            <div>
                <div className={ styles.badges }>
                    <div className={ styles.tagsContainer }>
                        <p className={ styles.tag }>Cozy</p>
                        <p className={ styles.tag }>Canal</p>
                        <p className={ styles.tag }>Paris 10</p>
                    </div>
                    <div className={ styles.rating }>
                        <i className={ `${styles.star } ${ styles.pinkStar }` } />
                        <i className={ `${styles.star } ${ styles.pinkStar }` } />
                        <i className={ `${styles.star } ${ styles.pinkStar }` } />
                        <i className={ `${styles.star } ${ styles.greyStar }` } />
                        <i className={ `${styles.star } ${ styles.greyStar }` } />
                    </div>
                </div>
                <div className={ styles.itemsContainer }>
                    <Item subtitle="Description">
                        Vous serez à 50m du canal Saint-Martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au coeur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à 1 station de la gare de l'Est (7 minutes à pieds).
                    </Item>
                    <Item subtitle="Équipements">
                        <ul>
                            <li>Climatisation</li>
                            <li>Wi-Fi</li>
                            <li>Cuisine</li>
                            <li>Espace de travail</li>
                            <li>Fer à repasser</li>
                            <li>Sèche-cheveux</li>
                            <li>Cintres</li>
                        </ul>
                    </Item>
                </div>
            </div>
        </div>
    )
}

export default Description