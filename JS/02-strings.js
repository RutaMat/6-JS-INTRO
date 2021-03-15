/*
Visos kombinacijos darbui su tekstu
*/
//Siandien yra kovo desimta
const menuo = 'kovo';
const diena = 'desimta';

const dayString =  'Siandien yra: ' + menuo + ' ' + diena + '.';
console.log(dayString);

//Cia yra dviguba (") kabute
const dvigubaKabute = ' Cia yra dviguba (") kabute.';
console.log(dvigubaKabute);

//Cia yra vienguba (') kabute.
const viengubaKabute = " Cia yra vienguba (') kabute."; 
console.log(viengubaKabute)

//Turiu vienguba (') kabute ir dviguba ( " )
const viengubaDviguba = " Cia yra vienguba (') ir dviguba (\") kabute."; 
console.log(viengubaDviguba);

//Mx saugumas vienguba (') kabute ir dviguba ( " )
const maxKabutes = " Max saugumas vienguba (\') ir dviguba (\") kabute."; 
console.log(maxKabutes);

const navHTML = '<nav>\
                    <a href="#">Link</a>\
                    <a href="#">Link</a>\
                 </nav>';
console.log(navHTML);

console.log('_______');
//Mano vardas: Petras.
const vardas = "Petras";
const petrasIntro = "Mano vardas: " +vardas + ".";
console.log(petrasIntro);

const petrasBacktick = `Mano vardas: ${vardas}.`;
console.log(petrasBacktick );

//Naujas pazymys: 2
const marks = [10, 5, 8, 7, 2];
const markSentence = `Naujausias pazymys: ${marks[marks.length-1]}.`;
console.log(markSentence)

const markSentence1 = `Pirmas pazymys: ${marks[0]}.`;
console.log(markSentence1)

const markSentence2 = `antras pazymys: ${marks[1]}.`;
console.log(markSentence2)

const navHTML2 = `<nav>
        <a href="#">Link</a>\
        <a href="#">Link</a>\
                 </nav>`;
console.log(navHTML2);