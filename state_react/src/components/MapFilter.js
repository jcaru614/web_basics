// what is map?
// a map takes a function, exucuting said function on
// each spot in the array, and returning the new array

let arr = [1,2,3]
let x = arr.map((element, index) => {
    console.log('element is ', element);
    console.log('index is ', index);
    if(index == 1) {
        console.log('this is one!');
        
    }
    return element * 2
})
console.log(x);
console.log('*********')

// what is filter
// a filter takes a function using it as criteria to
// exclude elements from an array returning the result array

let arr2 = [1,2,3,4]
let y = arr2.filter((element, index) => index != 0)
console.log('This is what has not been filtered ', y);

// *******************************************************

const state = [
    {name:'gary', age: 2, description: 'tall'},
    {name:'mary', age: 21, description: 'just kidding'},
    {name:'hary', age: 22, description: 'just kidding'},
    {name:'lary', age: 32, description: 'just kidding'},
    {name:'bary', age: 42, description: 'tall'},
]

// 
// 1.
let a = state.filter((el, i) => el.description =='tall')
console.log(a);

// 2.
let b = state.filter((el, i) => {
    el.age = 50;
    return el;
})
console.log(b);

// 3.
let c = state.filter((e, i) => e.age >= 2 && e.age <= 42)
console.log(c);


// 4.
    let d = state.map((el, i) => {
        if(el.name == 'mary') {
            el.name = 'tom'
        }
        if(el.name == 'bary') {
            el.name = 'jerry'
        }  
        return el;
    })
    console.log('this is d ',d);
    
    
// 5.

let e = state.map((el, i) => {
    if(el.description == 'just kidding') {
        el. description = 'nah'
    }
    return el;
})
console.log(e);
