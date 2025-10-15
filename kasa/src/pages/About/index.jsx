import Banner from "../../components/Banner"
// Import supprimé
import Collapse from "../../components/Collapse" // Code ajouté

import aboutImage from "../../assets/mountainBanner.png"

import styles from "./About.module.sass" // Code ajouté

function About() {
    return(
        <div>
            <Banner image={ aboutImage } alt="Rivière qui serpente au milieu des montagnes" light />

            {/* Code ajouté */}
            <div className={ styles.values }>
                <Collapse title="Fiabilité">
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </Collapse>
                <Collapse title="Respect">
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une expulsion de notre plateforme.
                </Collapse>
                <Collapse title="Service">
                    La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </Collapse>
                <Collapse title="Sécurité">
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.
                </Collapse>
            </div>
            {/*  */}
        </div>
    )
}

export default About