
// ham sort, tang a-b, giam b-a
var numbers = [2,9,3,4,1,41,213,45,5];
var sapxep = numbers.sort(function(a,b)
                         {
  return b-a;
});
console.log(sapxep);

var nguoi = [
  {name: 'A', age : 19},
  {name: 'B', age : 11},
  {name: 'C', age : 14},
]

var lonnhat = nguoi.sort(function(a,b)
                        {
  return a.age - b.age;
});

console.log(lonnhat);