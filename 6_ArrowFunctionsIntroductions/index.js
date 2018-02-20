const firstNames = ['Lucas', 'Dakota', 'Dylan', 'Naomi'];
const lastName = 'Youngman';

const fullNames = firstNames.map(function(name) {
    return `${name} ${lastName}`;
});

const fullNames2 = firstNames.map((name) => {
    // Explicit return
    return `${name} ${lastName}`;
});

// Implicit return
const fullNames3 = firstNames.map((name) => `${name} ${lastName}`);

console.log(fullNames3);

const sayMyName = (name) => { alert(`Hello ${name}`);}
sayMyName('Caree');



// NOTES:
// cannot redeclare a const variable
// arrow functions are always anonymous functions (no name)
// however you can assign it to a variable