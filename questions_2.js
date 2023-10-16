const { input, select } = require('@inquirer/prompts');


(async function() {
    // Indiquez un nombre entier
    // REPONSE 
    // nombre divisible par 5
    // nombre non divisible par 5

    // + vérifier que la valeur passée est bien un entier

    const response = await input({ message: 'Indiquez un nombre entier' });
    const responseCasted = parseInt(response, 10);
    if (isNaN(responseCasted)) {
        console.log('Cette valeur n\'est pas un nombre');
        return;
    }

    if(responseCasted % 5 === 0){
        console.log('Nombre divisible par 5')   
    } else {
        console.log('Nombre non divisible par 5')   
    }
    
    
})()