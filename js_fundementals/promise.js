// 1
// cleaner way of doing a call back
// this would always call the resolve method because its true
// if  a = 1 + 3 then it would return the reject method
let p = new Promise((resolve, reject) => {
    let  a = 1 + 1
    if (a == 2) {
        resolve('success')
    } else {
        reject('failed')
    }
})

p.then((message) => {
    console.log('this  is the then' + message);
    // if resolve do this
}).catch((message) => {
    console.log('this is in the catch' + message);
    // if reject do this
})

//  2
function orderSupplies(item) {
    let warehouse; //undefined
    const deliveryTime = Math.random() * 3000;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        warehouse = {
          paint: {
            product: 'Neon Green Paint',
            directions: () => 'mix it!'
          },
          brush: {
            product: 'Horsehair brush',
            directions: () => 'start painting!'
          },
          tarp: {
            product: 'A large tarp',
            directions: () => 'cover the floor!',
          }
        };
        resolve(warehouse[item]);
      }, deliveryTime);
    });
  }
  function receivedItem(item) {
    console.log(`Received ${item.product}, time to ${item.directions()}`);
  }
  
  const tarp = orderSupplies('tarp');
  const paint = orderSupplies('paint');
  const brush = orderSupplies('brush');
//   order of promises after calls .then and .catch after
  Promise.all([tarp, paint, brush])
    .then(items => items.forEach(receivedItem))
    .catch(error => console.log(error.message));
  
  const handleError = error => console.log(error.message);
  const roller = orderSupplies('roller').catch(handleError);

 
  