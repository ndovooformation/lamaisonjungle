
// Label de quantité d'arrosage ou d'éclairage
const quantityLabel = {
    1: 'peu',
    2: 'modérement',
    3: 'beaucoup',
    4: ' à la folie',
    5: 'passionnement',
    6: 'infinement'

}

const CareScale = ({scaleValue, careType}) => {
    const range = [1,2,3];
    const scaleType = careType === 'light' ? '🔆' : '💧'; 

    return(
        <div 
            onClick={() => {
                alert(`Cette plante a besoin de ${quantityLabel[scaleValue]} ${
                    careType === "light" ? "de lumière" : "d'arrosage"
                }`)
            }}
        >
            {
                range.map((rangeElement) =>
                    scaleValue >= rangeElement ? (
                    <span key={rangeElement.toString()}>{scaleType}</span>) : null
                )

            }
        </div>
    )

}

export default CareScale;