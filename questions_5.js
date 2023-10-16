const { input, select } = require('@inquirer/prompts');


(async function() {
    // Quelle est la Longueur 1
    // Quelle est la longueur 2
    // Quelle est la longueur 3

    // équilatéral : 3 côtés égaux
    // Isocèle : 2 côtés égaux
    // scalène: aucun côté n'est égale


    let l1 = await input({ message: 'Indiquez la longueur 1' });
    let l2 = await input({ message: 'Indiquez la longueur 2' });
    let l3 = await input({ message: 'Indiquez la longueur 3' });

    if(l1 == l2 && l2 == l3) {
        console.log('Equilatéral')
    } else if(l1 == l2 || l1 == l3 || l2 == l3){
        console.log('Isocèle')
    } else {
        console.log('Scalène')
    }
 
})()