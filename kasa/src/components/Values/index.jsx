import styles from "./Values.module.sass"

function Values() {
    return(
        <div className={ styles.values }>
            <div>
                <div className={ styles.titleContainer }>
                    <h2 className={ styles.title }>Fiabilité</h2>
                    <i className={ styles.chevronUp }></i>
                    <i className={ styles.chevronDown }></i>
                </div>
                <p className={ styles.valueSummary }>
                    Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
                </p>
            </div>
            <div>
                <div className={ styles.titleContainer }>
                    <h2 className={ styles.title }>Respect</h2>
                    <i className={ styles.chevronUp }></i>
                    <i className={ styles.chevronDown }></i>
                </div>
                <p className={ styles.valueSummary }>
                    La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une expulsion de notre plateforme.
                </p>
            </div>
            <div>
                <div className={ styles.titleContainer }>
                    <h2 className={ styles.title }>Service</h2>
                    <i className={ styles.chevronUp }></i>
                    <i className={ styles.chevronDown }></i>
                </div>
                <p className={ styles.valueSummary }>
                    La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
                </p>
            </div>
            <div>
                <div className={ styles.titleContainer }>
                    <h2 className={ styles.title }>Sécurité</h2>
                    <i className={ styles.chevronUp }></i>
                    <i className={ styles.chevronDown }></i>
                </div>
                <p className={ styles.valueSummary }>
                    La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestiques pour nos hôtes.
                </p>
            </div>
        </div>
    )
}

export default Values