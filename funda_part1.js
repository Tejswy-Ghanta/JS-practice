/* JavaScript Fundamentals – Part 1 */

/*LECTURE: Values and Variables */

let country, continent, population;
country = 'India';
continent = 'Asia';
population = 150000000;

console.log('Country - ',country);
console.log('Continent - ',continent);
console.log('Population - ',population);

/* LECTURE: Data Types */

let isIsland = false,language;
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);
console.log(typeof isIsland);
console.log(typeof language);

/* LECTURE: let, const and var */

language = 'Telugu';

//Uncaught TypeError: Assignment to constant variable.

/*LECTURE: Basic Operators */
console.log('Half population - ',population/2);
console.log('Increased population by 1 -',population+1);
console.log('Does ',country,' has more population than Finland (6 mil)?',population>6000000);
console.log('Does ',country,' has more than avg population (33 mil)?',population>33000000);

let description = country+' is in '+continent+', and its '+population+' people speak '+language;

console.log(description);


