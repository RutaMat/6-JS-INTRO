const pirmasskaicius = 7;
const antrasskaicius = 77;
const suma = pirmasskaicius + antrasskaicius;

console.log(pirmasskaicius, '+', antrasskaicius, '=', suma)

const mathText=pirmasskaicius + '+';
console.log(mathText);

console.log('......');

const petrasName = 'Petras';
const age = 99;

//Petras age is 99
const petrasAge = petrasName + ' age is ' + age +'.';
console.log(petrasAge);
console.log('......');

//sarasas (array)
const pazymiai = [5, 7, 8, 10];
console.log(pazymiai);

const abc = ['a', 'b', 'c', 'd', 'f'];
console.log(abc);

//Pazymiu suma: 20
const pazymiuSuma= pazymiai[0] + pazymiai[1] + pazymiai[2]+ pazymiai[3];
console.log('Pazymiu suma:', pazymiuSuma);

const pazymiuKiekis = pazymiai.length;
const pazymiuVidurkis=pazymiuSuma / pazymiuKiekis;

console.log('Pazymiu suma',pazymiuSuma);
console.log('Pazymiu kiekis', pazymiuKiekis);
console.log('Pazymiu vidurkis', pazymiuVidurkis);


//iš kur žinoti 5 raidžių abėcėlės paskutinė raidė yra f iš kur žinoti

const abcIlgis = abc.length;
const paskutinesRaidesPozicija = abcIlgis - 1;
const paskutineRaide = abc[paskutinesRaidesPozicija];

const abcAtsakymas = 'Is mums zinomos ' +  abcIlgis + 'raidziu abeceles paskutine yra "' + paskutineRaide + '".';
console.log(abcAtsakymas)
 