const firstNames = ['Lucas', 'Dakota', 'Dylan', 'Naomi'];
const lastName = 'Youngman';
const fullNames = firstNames.map(function(name) {
    return `${name} ${lastName}`;
})

console.log(fullNames);