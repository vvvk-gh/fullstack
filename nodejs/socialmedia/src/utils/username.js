const AJECTIVES = [
    'chemical',
    'damaged',
    'dynamic',
    'elite',
    'elastic',
    'fearless',
    'infamous'
]

const OBJECTS = [
    'bottlecap',
    'charger',
    'radio',
    'watch',
    'pen',
    'chair',
    'tshirt'    
]

function randomUserGenerator() {
    const adj = AJECTIVES[Math.floor(Math.random() * 7)];
    const obj = OBJECTS[Math.floor(Math.random() * 7)];
    return `${adj}-${obj}`
}


module.exports = {
    randomUserGenerator
}
//Test Code

/* console.log(randomUserGenerator())
console.log(randomUserGenerator())
console.log(randomUserGenerator())
console.log(randomUserGenerator()) */