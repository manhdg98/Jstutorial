// array.filter lọc phan tu
var numbers = [1, 2, 3, 4];
var loc = numbers.filter(function(item) 
             {
  return item%2 === 0;
})

console.log(loc);

// array.find

var so = [2,4,51,2];
var chiahetcho3 = so.find(function(item)
                         {
  return item%3===0;
})
console.log(chiahetcho3);