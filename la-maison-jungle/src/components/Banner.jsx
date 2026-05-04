/**
 * Banner est le composant pour présenter la bannière( la barre de navigation)
 * Le composant Banner retourne un message codé en HTML <h1>Bienvenue à la maison</h1>
 */

// J'importe le fichier Banner.css appliqué au composant Banner.jsx
import styles from '../styles/Banner.module.css'
// J'importe le logo
import logo from '../assets/unsplash-logo.jpg'

/**
 * 
 * @param {*} param0 
 * @returns 
 * Le composant Bannr.jsx prend comme propos ses enfants déclarés dans le composant App.jsx
 * J'utilise {children} pour faire appel aux props venant du coposant <Banner> <Banner> décalré dans le composant App.jsx
 * Le composant Banner.jsx retourne un <div> qui contient les enfants {children}
 */
const Banner = ({children}) => {

    return (
        <div className={styles.banner}>
            {children}
            
        </div>
        
    )
}

/**
 * J'exporte le composant Banner e utilisant les mots-clés export default suivi du nom du composant
 */
export default Banner