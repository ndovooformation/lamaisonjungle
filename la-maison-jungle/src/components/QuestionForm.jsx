
// J'importe useState depuis react.
import { useState } from "react"

// Je crée le composant QuestionForm
const QuestionForm = () => {

    const [inputValue, setInputValue] = useState('Tapez votre texte')

    const checkValue = (value) => {
        if(!value.includes('p')){
            setInputValue(value)
        }
    }

    return (
        <div>
            <textarea 
                value={inputValue} 
                onChange={(e) => checkValue(e.target.value)}
            />

            <button onClick={() => alert(inputValue)}>Cliquez</button>
        </div>

    )
}

export default QuestionForm