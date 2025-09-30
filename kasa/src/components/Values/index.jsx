import { useState, useId } from "react"
import styles from "./Values.module.sass"

function Item({ title, children }) {

    const [open, setOpen] = useState(false)
    const itemId = useId()

    return(
        <div className={ `${open ? styles.itemOpen : ""}` }>
            <div className={ styles.titleContainer }>
                <h2 className={ styles.title }>{ title }</h2>
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
                className={ styles.valueSummary }
                hidden={ !open }
            >
                { children }
            </p>
        </div>
    )

}

function Values() {
    return(
        <div className={ styles.values }>
            <Item title="Fiabilité">
                Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </Item>
            <Item title="Respect">
                La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une expulsion de notre plateforme.
            </Item>
            <Item title="Service">
                La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
            </Item>
            <Item title="Sécurité">
                La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.
            </Item>
        </div>
    )
}

export default Values