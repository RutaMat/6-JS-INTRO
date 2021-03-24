/*
JS ciklai ir cikliskos funkcijos / metodai
For
For in 
For of
Foreach
map 
filter
sort
while
do while
Visuose užd bus bendra salyga ir duomenimis (praleidzia ko nereik)
*/

const list = [1, -5, 78, 2, 11, -14, 0, -3]

//For
//- for galimybe. Break nutraukia ciklo darba pvz.dabar pvz -14 ir sustoja
// - for galimybe.continue eiti i sekancia ciklo iteracija, jei tokia yra

for (let i = 0; i < list.length; i++) {
    const item = list[i];
    //if (item < -10) {
      //  break;
    //}
    if (item > 0) {
        continue;
    }
    console.log(item);
}
console.clear()

//For in
//- for in galimybe. Break nutraukia ciklo darba pvz.dabar pvz -14 ir sustoja
// - for in galimybe.continue eiti i sekancia ciklo iteracija, jei tokia yra
//tai supaprastinta automatine funkcija list supranta kaip numeracija nuo 0

for (const i in list) {
    const item = list[i];
   // tokiu atveju automatiskai praskipina
  //  if (item > 0) {
 //       continue;
  //  }
    console.log(i, item)
}
console.clear();

//For-of. jis kitaip negu For vietoj for 2pirmu eil. rasoma tik 1na pirma
for (const item of list) {
    
    if (item > 0) {
        continue;
    }
    console.log(item);
}
//issivvalymas consoles

console.clear();

//WHILE (tol kol nepadarai, nedarysi to zingsnio. nuo for - skiriasi tuo kad juose is anksto zinomi sarasai ir apskaiciujama)
//jis patogiau skaitosi kol cikla suki ir gauni rezultata. Nera apibrezta ciklu kiekis....nera tikslaus dydzioJei statai nama tada reik sienu, sienos pastatomos jeigu darbininkai turi irankisu.... n
//taip pat naudojimas ir sarasam

//susikuriam kintama
//let randomNumber = Math.random();
//console.log(randomNumber)
//isloginam randomNumber reiksmes nuo tik[0..1] (tai yra javascriptinis etsitiktinis metodas Math.random)
//klausimas kiek kartu reikia atlikti cikla jog ismestu 0.9. tada ir ateina While

let randomNumber = 0;
let randomNumberCount =0;

while (randomNumber < 0.9) {
    randomNumber = Math.random();    //[0..1)
    randomNumberCount++;
    console.log(randomNumberCount, randomNumber);
 
}
///tarkime su while noretumem per cikla.cia foras ismetytas. realiai jis tas pat kas for
//continue neveikia. break galima
let i = 0;
while (i < list.length) {
    const item = list[i];
    if (item < -10) {
        break;
    }
    console.log(item)
    i++;
}
console.clear();

// DO-while. dwi whilo indeksas
let dwi =0;
do {
console.log(dwi);
dwi++;
} while (dwi > 5 )   // cia klausia ar gali testi darba...jis fainas kada logika nori padaryti viena kart o daugiau yra while uzbaigs

//array function jeigu norim isanalizuoti metodus. pvz 22folderis

console.clear();

//FOREACH
// ciklas kuris pats automatiskai nuo pimo iki pakutinio nario eina per sarasa. klausimas kokia paskutine funkcija. 
//anonimines funkcijos : (function() {}). bevardei duoda tiksla ITEMS tiklsiau kiekvienas saraso list narys..suma += item;



//list.forEach(function(item, i, arr) {
     //console.log(i, item, arr);
//})
   
//jeigu noriu matyti visus parametrus pakanka taip: 
//list.forEach(function(item, i) {
//console.log(i, item);

//jei nereik indekso pakanka:list.forEach(function(item => console.log(item)); galimas ir trumpinys forEach(n => suma += n) (jeigu dar suskaiciuoti visa areju( suma) tada+ let suma = 0 ir consol.log(suma);

let FEsuma = 0;

list.forEach(n => FEsuma += n)
    //suma += item;
    //console.log('labas');
    console.log(FEsuma);

  
console.clear();

const doubleList = [[1, 5], 15, [8, 99], -40, [-8, -7, 15, 4], [3], 456221];

let dlSuma = 0;

doubleList.forEach(
    innerItem => typeof innerItem === 'number'
    ? dlSuma += innerItem
    :innerItem.forEach(n => dlSuma += n)
    );

console.log(dlSuma);
console.clear();

//MAP

const mapList = [1, 2, 3, 4, 5, 6];
const mapListSquare = [];
 //einam iprastu variantu
for (const num of mapList) {
    mapListSquare.push(num + num);

}
console.log(mapListSquare);
// kitas budas maplist trumpesnis
//const mapListSquare = mapList; 

console.clear(mapList);

/*********NEPABAIGTA 44:56min 2d***/

const sortList = [1, -5, 78, -14, 0, -3, 11]; 
const sortAbc =['a', 'citrina', 'd', 'M']
const sortedNumber = [...sortList].sort((a, b) => a > b ? -1 : 1 ); //pvz 11, 2 => 2, 11 kai norim suzinoti kuris didesnis kitas budas < pakeisti arba tiesiog => a - b 
const sorteAbc = sortAbc.sort();

console.log(sortedNumber);
console.log(sorteAbc);




