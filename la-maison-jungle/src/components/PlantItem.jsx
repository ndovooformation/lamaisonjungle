/**
 * Le composant PlantItem gère chauqe plante vendu sur le site.
 * Exemple, la plante a une imahe, un nom, type d'arrosage, le type d'éclairage
 */


import CareScale from './CareScale'

import styles from '../styles/PlantItem.module.css'



const PlantItem = ({id, cover, name, water, light, isBestSale}) => {
    
    const handleClick = (event) => {
        console.log("Je clique sur mon evement :", event);
    }

    return (
        <li key={id} className={styles.lmjPlantItem} onClick={() => handleClick(name)}>
            <img className={styles.lmjPlantItemCover} src={cover} alt={`${name} cover`} />
            {name}

            <div>
                <CareScale careType ="water" scaleValue= {water} />
                <CareScale careType="light" scaleValue = {light} />
            </div>
        </li>
    )
}
export default PlantItem