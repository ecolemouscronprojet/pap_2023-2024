const { input, select } = require('@inquirer/prompts');


(async function() {
    // Quelle est votre taille
    // Quelle est votre poids

    // reponse votre IMC est :


    let taille = await input({ message: 'Indiquez votre taille en cm' });
    const poids = await input({ message: 'Indiquez votre poids' });
    taille /= 100;

    const imc = poids/(taille*taille)

    console.log(`Votre IMC est : ${imc}`);

    
})()