import { useState, useId } from "react"

import styles from "./Collapse.module.sass"

function Item({ title, children, about=false }) {

    const [open, setOpen] = useState(false)
    const itemId = useId()

    return(
        <div className={ `${ styles.item } ${ about ? styles.about : "" }` }>
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
            <div
                id={ itemId }
                className={ `${ styles.summary } ${ open ? styles.open : "" }` }
            >
                { children }
            </div>
        </div>
    )

}

export default Item