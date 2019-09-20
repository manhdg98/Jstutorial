// // array.reduce
// var numbers = [1, 2, 3 ,4];
// var a = numbers.reduce(function (a,b)
//               {
//   console.log(a,b);
//   return a + b;
// }, 4);
// console.log(a);

var orders = [
  {name: 'A', quantity: 2, unitPrice: 100},
  {name: 'B', quantity: 4, unitPrice: 200},
  {name: 'C', quantity: 5, unitPrice: 130}
];

var c= orders.map(function(item){  
            return item.quantity * item.unitPrice;
       }).reduce(function(a,b){
  console.log(a,b);
           return a + b;
       });
console.log(c);

var total = orders.reduce(function(currentTotal, product) {
          return currentTotal + product.quantity * product.unitPrice;
 }, 0);
console.log(total);
