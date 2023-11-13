const { input } = require('@inquirer/prompts');

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        reponse: 1,
    },
    {
        question: "Quelle est la capitale de la Suisse ?",
        reponse: "Berne"
    },
    {
        question: "La tomate est-elle un fruit ?",
        reponse: "Oui"
    },
    {
        question: "Que veut dire HTML ?",
        reponse: "Hyper Text Markup Language"
    },
    {
        question: "Ou se trouve le siege social de l'UE ? (Ville)",
        reponse: "Bruxelles"
    }
];


(async function () {
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i]
        const response = await input({ message: q.question });
        if(response.toLocaleLowerCase() === String(q.reponse).toLocaleLowerCase()) {
            score++
        }
    }
    console.log(`${score}/${questions.length}`)


})()