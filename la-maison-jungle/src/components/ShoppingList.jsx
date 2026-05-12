/**
 * ShoppingList est un composant qui contient la liste des courses
 */

// J'importe le style ShopingList.module.css
import styles from '../styles/ShopingList.module.css'

// J'importe le composant CareScale.jsx
import CareScale from './CareScale'

// J'importe le composant PlantItem.jsx
import PlantItem from './PlantItem'

// J'importe l'image montsera
import montsera from '../assets/montsera-unsplash.jpg'

// Je crée une liste de fleurs. Par la suite, j'utiliserai la liste pour renvoyer des fleurs depuis le composant ShoppingList.
const plantList = [
    {
        name: 'montsera',
        category: 'classique',
        id: '1',
        isBestSale: true,
        isSpecialOffer : true,
        water : 1,
        light: 5,
        cover: montsera
    },
    {
        name: 'ficus lyarata',
        category: 'classique',
        id: '2',
        isBestSale: false,
        isSpecialOffer : false,
        water: 2,
        light: 6,
        cover: montsera
    },
    {
        name: 'pothos argenté',
        category: 'classique',
        id: '3',
        isBestSale: false,
        isSpecialOffer : false, 
        water: 3,
        light: 4,
        cover: montsera
    },
    {
        name: 'yucco',
        category: 'extérieur',
        id: '4',
        isBestSale: true, 
        isSpecialOffer : true,
        water: 1,
        light: 5,
        cover: montsera
    }, 
    {
        name: 'palmier',
        category: 'extérieur',
        id: '5',
        isBestSale: false,
        isSpecialOffer : false, 
        water: 2,
        light: 3,
        cover: montsera
    }
];


// je crée mon composant ShoppingList qui renvoie une liste d'achats
const ShoppingList = () => {
    return ( /** */
        <div>
            <ul className={styles.lmjPlantList}>
            {
                plantList.map(({id, name, cover, water, light}) => (
                    /** */
                    <PlantItem 
                        key={id}
                        id={id}
                        name={name}
                        cover={cover}
                        water={water}
                        light={light}
                    
                    />

                )
                    
            )
            }
            
        </ul>
        </div>
        
    )
}

export default ShoppingList