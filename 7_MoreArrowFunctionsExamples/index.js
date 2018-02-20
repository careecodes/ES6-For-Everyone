const race = '100m Dash';
const winners = ['some name', 'another name', 'anotha name'];

// wrap the object in parenthesis to show that we are implicit returning an object literal
const win = winners.map((winner, i) => ({name: winner, race, place: i + 1}));
// you don't need to pass in race: race, you can just pass in the word race and it will map the property race to the variable named race. new feature in es6

const ages = [23, 50, 200, 1, 4, 75, 100, 2];

// filter by age is greater or equal to 60
// no need for if statement with the filter
// if age is ghreater or equal, will return true, which will return age
// WHAT DOES AGE REPRESENT HERE? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const oldThreshold = 60;
const old = ages.filter(age => age >= oldThreshold);
console.log(old);


// NOTES:
// console.table(win) in the console will return a table of objects 