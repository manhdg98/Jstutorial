var mouse = {
  weight : 0.2,
  getHeight : function() {
      return this.weight;
    }
};

function Mouse(color) {
  this.type = 'mouse';
  this.color = color;  
  this.weight = 0.2;
}

var mouse1 = new Mouse('white');
var mouse2 = new Mouse('black');
console.log(mouse1);
console.log(mouse2);