/**
 * Le composant Cart représente le panier de courses.
 * Le composant Cart sera réutlisé dans le composant App
*/

import styles from '../styles/Cart.module.css'

import { useState } from 'react'

const Cart = () => {
    const monsteraPrice = 8
    const lierre = 12
    const bouquet = 9
    const [cart, updateCart] = useState(0)
    const [open, setOpen] = useState(false)

    return open ? (
        <div className={styles.cart}>
            <button 
                className={styles.lmjCartToogleButton} 
                onClick={() => setOpen(false)}>
                    Fermer
            </button>
            <h2>Votre panier</h2>
        
            <div>
                Montsera: {monsteraPrice} €
                <button 
                    className={styles.lmjCartAddButton}
                    onClick={() => updateCart(cart + 1)}>
                        Ajouter
                </button>
            </div>
          
            <p>Total : {monsteraPrice * cart} €</p>
            <button onClick={() => updateCart(0)}>Vider</button>

        </div>
        
    ) : (
        <div className={styles.lmjCartClosed}>
            <button 
                className={styles.lmjCartToogleButton} 
                onClick={() => setOpen(true)}>
                    Ouvrir le panier
            </button>
        </div>
        
    )
}

export default Cart