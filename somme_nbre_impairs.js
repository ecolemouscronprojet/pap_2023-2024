const { input } = require('@inquirer/prompts');


(async function () {
    let nb = NaN;
    
    while(isNaN(nb)){
        const response = await input({ message: 'Saisissez un nombre ?' });
        nb = parseInt(response, 10)
    }

    let total = 0
    for(let i=1; i<=nb;i++){
        if(i % 2 == 1) {
            total += i
        }
    }

    console.log('total', total)

})()