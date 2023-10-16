const { input } = require('@inquirer/prompts');

(async function () {

    const note = await input({ message: 'Donnez moi une notre de 0 à 100' });
    if (note >= 90 && note <= 100) {
        console.log("A")
    } else if (note >= 80 && note <= 89) {
        console.log("B")
    } else if (note >= 70 && note <= 79) {
        console.log("C")
    } else if (note >= 60 && note <= 69) {
        console.log("D")
    } else if (note >= 0 && note <= 59) {
        console.log("E")
    } else {
        console.log("valeur invalide !!")

    }
})()