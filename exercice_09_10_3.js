// Bibliotheque

const { input, select } = require('@inquirer/prompts');


// Code

(async function () {

    // Poids du colis
    var poids = await input({ message: "Veuillez indiquer le poids du colis (kg) :"});
    
    // Zone d'envoie
    const zone = await select({
        message: "Zone d'envoie du colis :",
        loop: false,
        choices: [
            {
                name: "Local",
                value: "local"
            },
            {
                name: "National",
                value: "national"
            },
            {
                name: "International",
                value: "international"
            }
        ]
    });
    let frais;
    if(zone ===  'local') {
        frais = 5 + (2 * poids)
    } else if(zone ===  'national') {
        frais = 10 + (poids * (poids < 10 ? 4 : 3))
    } else if(zone ===  'international'){
        frais = 15 + (poids * (poids < 5 ? 10 : 7))
    }

    console.log(`\nLes frais de votre colis allant dans une zone ${zone} et pesant ${poids} kg, s'eleve a ${frais?.toFixed(2)}€`)
})();

// Fin du code