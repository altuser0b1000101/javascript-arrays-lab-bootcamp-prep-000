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

function appendKitten(name) {
name = ('Bobby');
name.concat(kittens);
return name;

}