import { useState, useId } from "react"

import styles from "./Collapse.module.sass"

function Collapse({ title, children }) {

    const [open, setOpen] = useState(false)
    const collapseId = useId()

    return(
        <div className={ styles.collapse }>
            <div className={ styles.titleContainer }>
                <h2 className={ styles.title }>{ title }</h2>
                <button
                    type="button"
                    className={ styles.chevronUpButton }
                    aria-expanded={ open }
                    aria-controls={ collapseId }
                    onClick={() => setOpen(o => !o)}
                >
                    <i
                        aria-hidden="true"
                        className={ open ? styles.chevronDown : styles.chevronUp }
                    />
                </button>
            </div>
            <div
                id={ collapseId }
                className={ `${ styles.summary } ${ open ? styles.open : "" }` }
            >
                { children }
            </div>
        </div>
    )

}

export default Collapse