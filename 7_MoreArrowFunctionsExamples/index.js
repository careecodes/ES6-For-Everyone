const race = '100m Dash';
const winners = ['some name', 'another name', 'anotha name'];

// wrap the object in parenthesis to show that we are implicit returning an object literal
const win = winners.map((winner, i) => ({name: winner, race: race, place: i}));









// NOTES:
// console.table(win) in the console will return a table of objects 