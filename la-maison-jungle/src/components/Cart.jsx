/**
 * Le composant Cart représente le panier de courses.
 * Le composant Cart sera réutlisé dans le composant App
*/

import styles from '../styles/Cart.module.css'

const Cart = () => {
    const montsera = 8
    const lierre = 12
    const bouquet = 9

    return (
        <div className={styles.cart}>
            <h2>Votre panier</h2>
            <ul>
                <li>Montsera: {montsera} €</li>
                <li>Lierre: {lierre} €</li>
                <li>Bouquet de fleurs: {bouquet} €</li>
            </ul>
            <p>Total : {montsera +  lierre + bouquet} €</p>

        </div>
        
    )
}

export default Cart