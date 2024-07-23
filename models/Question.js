export class Question{
    /**
     * 
     * @param {string} text 
     * @param {string[]} choises 
     * @param {string} answer 
     */
    constructor(text, choises, answer){
        this.text = text;
        this.choises = choises;
        this.answer = answer
    }

    /**
     * 
     * @param {string} choise 
     * @returns {boolean}
     */
    correctAnswer(choise){
        return choise === this.answer
    }
}

