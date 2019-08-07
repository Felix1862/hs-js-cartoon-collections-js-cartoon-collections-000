function dwarfRollCall(dwarves) {
}
var dwarves = [`Doc`,`Doc`, `Dopey`, `Bashful`, `Grumpy`]
delete dwarves[0]
dwarves.forEach(function(item, index, array) {
console.log(index, item)
})

function summonCaptainPlanet(planeteerCalls){
}
var planeteerCalls = "'earth!', 'wind!', 'fire!', 'water!', 'heart!'"
console.log(planeteerCalls.toUpperCase());


function longPlaneteerCalls(words) {
}
var words = ['earth','wind', 'fire', 'water', 'heart'];
let find = words.find((words)=>{
  if(words.length > 4){
    return true;
  }
})
console.log(true)


function findTheCheese (foods) {
}
