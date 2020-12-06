function Cat(){
    this.stomath = [];
}
Cat.prototype.eat = function(Mouse){
    this.stomath.push(Mouse);
    Mouse.died = true;
}
function Mouse(name){
    this.name = name;
    this.died = false;
}

var Tom = new Cat();
var Jenny = new Mouse('Jenny');
Tom.eat(Jenny);
console.log(Tom);
console.log(Jenny);

