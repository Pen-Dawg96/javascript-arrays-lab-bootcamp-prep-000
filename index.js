// Add your functions and code here
var kittens = ["Milo", "Otis", "Garfield"]


function destructivelyAppendKitten(name){
  return kittens.push("Ralph")
}
function destructivelyPrependKitten(name){
  return kittens.unshift("Bob")
}
function destructivelyRemoveLastKitten(){
  return kittens.pop()
}
function destructivelyRemoveFirstKitten(){
  return kittens.shift()
}
function appendKitten(name){

  return kittens.concat(kitten1)
}
function prependKitten(name){
  return kitten2.concat(kittens)
  kittens = [...kittens, "Broom"]
}
function prependKitten(name){
  return kittens

}
function removeLastKitten(){
  return kittens.slice(0, kittens.length - 1) 
}
function removeFirstKitten(){
  return kittens.slice(1)
}