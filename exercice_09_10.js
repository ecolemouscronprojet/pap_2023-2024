const { input, select } = require('@inquirer/prompts');

const mois_31 = ['JANVIER', 'MARS', 'MAI', 'JUILLET', 'AOÛT', 'OCTOBRE', 'DECEMBRE'];
const mois_30 = ['AVRIL', 'JUIN', 'SEPTEMBRE', 'NOVEMBRE']


    (async function () {

        let mois = await input({ message: 'Donnez-moi le nom d\'un mois' });
        mois = mois.toUpperCase();

        if (mois_31.includes(mois)) {
            console.log('31 jours')
        } else if (mois_30.includes(mois)) {
            console.log('30 jours')
        } else if (mois == 'FEVRIER') {
            console.log('28 jours')
        } else {
            console.log('mois invalide')
        }

    })()