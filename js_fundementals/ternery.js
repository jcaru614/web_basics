var age  = 15

if (age >= 18) {
    console.log('you are adult')
} else {
    console.log('you are kid');
}

// ternery
console.log((age >= 18) ? 'You are adult' : 'you are kid');



let canAfford = (itemPrice, accountBalance) => {
    if (itemPrice > accountBalance) {
        // backticks `` allow you to wrap everthing in string and denote placeholder using ${}
        // the first $ is part of the string and will show up but second is part of backticks placeholder
        return `cannot afford. you are $${itemPrice - accountBalance} short`;
    } else {
        return 'can afford'
    }
}

// ternery 
let canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance
    ? `cannot afford. you are $${itemPrice - accountBalance} short` : 'can afford'
};
// is the item price  greater than accountbalance
// yes? then return 'cannot afford'
// no then return 'can afford

