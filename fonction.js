
// // déclaration de la fonction
// function message() {
//     let message = 'Hello'
//     // return message.concat(' world') 
//     message += ' world'
//     return message
// }

// console.log(message())
// const m = message()
// console.log(m)
// message()
// message()


// console.log(addition(1, 11))

// function addition(nb1, nb2) {
//     return nb1 + nb2
// }


// const nb1 = 5
// const nb2 = 10
// const result = addition(nb2, nb1)
// const result2 = addition(10, 577)
// const add = addition(result, result2);


// addition(5, 10)


const addition2 = function(nb1, nb2){
    console.log(this)
    return nb1 + nb2
}

const addition3 = (nb1, nb2) => {
    console.log(this)
    return nb1 + nb2
}


