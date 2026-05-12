import { useState } from "react"

import styles from '../styles/Footer.module.css'

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleBlur = () => {
        if(!inputValue.includes("@")){
            alert("Votre adresse email est incorrecte. Il manque '@'.")
        }
    }

    return (
        <footer className={styles.lmjFooter}>
            <div className={styles.lmjFooterElem}>
                Pour les passionnés de plantes 🌱🪴💐🌹
            </div>
            <div className="lmj-footer-elem">
                Laissez-nous votre email:
            </div>
            <input 
                placeholder="Entrez votre email"
                value={inputValue}
                onChange={handleInput}
                onBlur={handleBlur}
                />

        </footer>
    )
}

export default Footer