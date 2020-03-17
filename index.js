// a very basic way to manually add together the prices
// const products = [
//   { name: 'Shampoo', price: 4.99 },
//   { name: 'Donuts', price: 7.99 },
//   { name: 'Cookies', price: 6.49 },
//   { name: 'Bath Gel', price: 13.99 }
// ];

// function getTotal(products) {
//   let totalPrice = 0;
//   products.forEach(function(product) {
//     totalPrice += product.price;
//   });
//   return totalPrice
// }

// same as above using two args and a callback
// const couponLocations = [
//   { room: 'Living room', amount: 5 },
//   { room: 'Kitchen', amount: 2 },
//   { room: 'Bathroom', amount: 1 },
//   { room: 'Master bedroom', amount: 7 }
// ];


// function ourReduce(arr, reducer, init) {
//   let accum = init;
//   arr.forEach(element => {
//     accum = reducer(accum, element);
//   });
//   return accum
// }

// function couponCounter(totalAmount, location) {
//   return totalAmount + location.amount;
// }

// console.log(ourReduce(couponLocations, couponLocations, 0)

// )

// Code your solution here

const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

let totalBatteries = batteryBatches.reduce((total, el) => {
  return total + el
  }
)
