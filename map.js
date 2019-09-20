var coffeeMachine = {
  makeCoffee : function(onFinish) {
    console.log('Making coffee..');
    onFinish();
  }
}

var beep = function () {
  console.log('Tit tit');
}

coffeeMachine.makeCoffee(beep);

// array map
var mang = [1,2,3,5];
var  muhai = mang.map(function(x){
                      return x*x;
                      }
)
console.log(muhai);

// dien tich
var dodai = [
  { width: 10, height : 5},
  { width: 2, height : 15},
  { width: 6, height : 3}
];

var dientich =dodai.map(function(a)
                       {
            return a.width * a.height;
});

console.log(dientich);








