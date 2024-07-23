//@ts-check
import { questions } from "./data/questions.js";
import { Quizz } from "./models/Quizz.js";
import { UI } from "./models/UI.js";

/**
 * 
 * @param {Quizz} quizz 
 * @param {UI} ui 
 */

const renderPage = (quizz, ui) => {
    if(quizz.isEnded()){
        ui.showScores(quizz.score)
    }else{
        ui.showQuestion(quizz.getQuestionIndex().text)
        ui.showChoises(quizz.getQuestionIndex().choises, (currentChoise) => {
            quizz.gess(currentChoise);
            renderPage(quizz, ui)
        })
        ui.showProgress(quizz.questionIndex+1, quizz.questions.length)
    }

}

function main(){
    const quizz = new Quizz(questions)
    const ui = new UI()
    renderPage(quizz, ui)
}

main()