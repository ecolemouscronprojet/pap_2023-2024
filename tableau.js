// TABLEAU VIDE
const t1 = [];
const t2 = Array();


// TABLEAU VIDE
const t3 = ["pomme", "poire"];
const t4 = Array("pomme", "poire");

//POUSSER DES INFOS DANS LE TABLEAU
t3.push("orange", "orange")

// Récupérer des informations depuis le tableau
console.log(t3)
console.log('taille', t3.length)
console.log('element 0', t3[0])
console.log('element 1', t3[1])
console.log('element 2', t3[2])
console.log('element 3', t3[3])
console.log('element 4', t3[4])

// SUPPRIMER DES ELEMENTS
// t3.length = 2
// t3.splice(0, Infinity)

//modifier une valeur dans un tableau
t3[0] = "cerise"

t3[10]= "yoo";
console.log(t3)


console.log(typeof t3)
console.log(Array.isArray(t3))

// map
// filter
// some
// every
// reduce
// find
// findIndex

