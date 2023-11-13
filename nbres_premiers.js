const { input } = require('@inquirer/prompts');


(async function () {
    let nb = NaN;
    
    while(isNaN(nb)){
        const response = await input({ message: 'Saisissez un nombre ?' });
        nb = parseInt(response, 10)
    }

    for(let i=1; i<=nb;i++) {
        let total = 0
        for(let e=1; e<=i;e++){
            if(i % e === 0) {
                total++
            }
        }
        if(total === 2){
            console.log(`nombre premier ${i}`)
        }
    }

})()