var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
name = kittens.push('Ralph');
return kittens;
}


function destructivelyPrependKitten(name) {
  name = kittens.unshift('Bob');
  return kittens;
}

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
} 

function prependKitten(name){
  var name_2=[name, ...kittens];
  return name_2;
}
