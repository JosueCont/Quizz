export class UI{
    constructor(){

    }

    /**
     * 
     * @param {string} text 
     */
    showQuestion(text){
        const questionTitle = document.getElementById('question') 
        questionTitle.innerHTML = text
    }

    /**
     * @param {string[]} choises
     */
    showChoises(choises, callback){
        const choisesContainer = document.getElementById('choices')
        choisesContainer.innerHTML = ''
        for(let i = 0; i < choises.length; i++){
            const button = document.createElement('button')
            button.innerText = choises[i]
            button.className = 'button'
            button.addEventListener('click', () => callback(choises[i]))
            choisesContainer.append(button)
        }
    }

    /**
     * 
     * @param {number} score 
     */
    showScores(score){
        const quizzEndHTML = `
            <h1>Resultado</h1>
            <h2>Puntaje: ${score}</h2>
        `;
        const element = document.getElementById('quizz')
        element.innerHTML = quizzEndHTML
    }

    /**
     * 
     * @param {number} currentIndex 
     * @param {number} total 
     */
    showProgress(currentIndex, total){
        const element = document.getElementById('progress')
        element.innerHTML = `Pregunta ${currentIndex} de ${total} `
    }
}