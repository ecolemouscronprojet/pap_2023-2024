const message = 'Hello la team';
console.log(typeof message)

const nb = 10;
console.log(typeof nb)

const vrai = true;
console.log(typeof vrai)


// déclarer une variable prenom1 où vous allez stocker votre prénom
// créer une deuxième variable prenom2 où vous allez y stocker la valeur de votre prénom
// venant de la première variable
// imprimez à l'écran le contenu de la variable prenom2
// EXERCICE 1
const prenom1 = 'Samuel';
const prenom2 = prenom1;

console.log(prenom2)



// EXERCICE 2

// inverser les valeurs des varaibles nb1 et nb2

//
// nb1 => nb4
// nb2 => nb3
// nb3 => nb1
// nb4 => nb2
let nb1 = 10;
let nb2 = 15;
let nb3 = 26;
let nb4 = 38;

const temp = nb4;
nb4 = nb2;
nb2 = nb3;
nb3 = nb1;
nb1 = temp;


console.log(nb1, nb2, nb3, nb4)





// let temp = nb1
// nb1 = nb2
// nb2 = temp

// [nb1, nb2] = [nb2, nb1]

// console.log(nb1, nb2);