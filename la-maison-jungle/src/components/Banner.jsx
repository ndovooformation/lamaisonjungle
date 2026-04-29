/**
 * Banner est le composant pour présenter la bannière( la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison</h1>
 */

// J'importe le fichier Banner.css appliqué au composant Banner.jsx
import styles from '../styles/Banner.module.css'
// J'importe le logo
import logo from '../assets/unsplash-logo.jpg'


const Banner = () => {
    const title = "Bienvenue à la maison"

    return (
        <div className={styles.banner}>
            <img src={logo} alt="Logo de la maison" className={styles.logo}/>
            <h1 className={styles.title}>{title}</h1>

        </div>
        
    )
}

/**
 * J'exporte le composant Banner e utilisant les mots-clés export default suivi du nom du composant
 */
export default Banner