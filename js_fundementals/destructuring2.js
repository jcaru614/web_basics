// destrucuring is taking an object or array and make it into smaller objects or arrays

const alphabet = ['a', 'b', 'c', 'd', 'e','f',]

// old way
// const a = alphabet[0]
// const b = alphabet[1]

// destrucuring
const [a,, c, ...restofarr] = alphabet
// , are used to skip the place you wont to destructure in the row
// ... is used at the end to grab the rest of what you want
console.log(a);
console.log(c);
console.log(restofarr);


