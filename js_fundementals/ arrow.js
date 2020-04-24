function sum(a,b) {
    return a +b
}
// the arrow denotes the left side is the parameters
// the arrow denotes its a function and the right 
// inside brackets we put function syntax we are using
// everththing after arrow is implicit return 
let sum2 = (a,b) => a + b

function isPositive(number) {
    return number >= 0
}
// we only have one parameter so we can remove parenthesis
// arrow says we return everthing after it
let isPositive2 = number => number >=0

function randomNum() {
    return Math.random
}

// since it has no parameters we use the parenthesis empty
const randomNum2 = () => Math.random

document.addEventListener('click', function(){
    console.log('click')
})

document.addEventListener('click', () => console.log('click'))