import { useState, useId } from "react"
import styles from "./Description.module.sass"

function Item({ subtitle, children }) {

    const [open, setOpen] = useState(false)
    const itemId = useId()

    return(
        <div>
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
            <div
                id={ itemId }
                className={ styles.descriptionSummary }
                hidden={ !open }
            >
                { children }
            </div>
        </div>
    )

}

function Description({ title="", location="", tags=[], name="", avatar, rating=0, description="", equipments=[] }) {

    const maxStars = 5
    const safeRating = Math.min(maxStars, Math.max(0, Number(rating) || 0))

    return(
        <div className={ styles.description }>
            <div className={ styles.descriptionHeader }>
                <div className={ styles.leftDescriptionHeader }>
                    <div className={ styles.topDescriptionHeader }>
                        <h2
                            className={ styles.title }
                            title={ title }
                        >
                            { title }
                        </h2>
                        <p
                            className={ styles.location }
                            location={ location }
                        >
                            { location }
                        </p>
                    </div>

                    <ul
                        className={ styles.tagsContainer }
                        tags={ tags }
                    >
                        { tags.map((tg, idx) => (
                            <li
                                key={ idx }
                                className={ styles.tag }
                            >
                                { tg }
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={ styles.rightDescriptionHeader }>
                    <div className={ styles.profile }>
                        <p
                            className={ styles.name }
                            name={ name }
                        >
                            { name }
                        </p>
                        <img
                            className={ styles.avatar }
                            src={ avatar }
                            alt="Photo de profil"
                        />
                    </div>

                    <div
                        className={ styles.rating }
                        aria-label={ `Note : ${ safeRating } sur ${ maxStars }` }
                        role="img"
                    >
                        { Array.from({ length: maxStars }, (_, i) => (
                            <i
                                key={ i }
                                aria-hidden="true"
                                className={ `${ styles.star } ${ i < safeRating ? styles.pinkStar : styles.greyStar }` }
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className={ styles.descriptionFooter }>
                <Item
                    subtitle="Description"
                    description={ description }
                >
                    { description }
                </Item>

                <Item
                    subtitle="Équipements"
                    equipments={ equipments }
                >
                    <ul className={ styles.liste }>
                        { equipments.map((eq, idx) => (
                            <li key={ idx }>
                                { eq }
                            </li>
                        ))}
                    </ul>
                </Item>
            </div>
        </div>
    )
}

export default Description
