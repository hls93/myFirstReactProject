
// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name = name;
  this.status = status || 'normal';
  this.color = color;
  this.hungry = hungry || false;
  this.owner = owner;
}

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.pet = function(dog) {
    dog.status = 'happy';
  };
  this.feed = function(dog) {
    dog.hungry = false;
  };
  this.cool = cool || false;
}

// ============================================

let fluffy = new Dog('Fluffy', 'normal', 'brown');
let butter = new Dog('Butter', 'normal', 'yellow', true);
let champ = new Dog('Champ')

let mason = new Human('Mason', false);
let julia = new Human('Julia', true);
