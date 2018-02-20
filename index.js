const names = ['Lucas', 'Dakota', 'Dylan', 'Naomi'];

// const sayNames = function(){
//     return names;
// }

const fullNames = names.map(function(name) {
    return `${name} Youngman`;
})

console.log(fullNames);