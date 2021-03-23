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
console.clear(1)

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

//For-of. jis kitaip negu For vietoj for 2pirmu eil. rasoma tik 1na pirma
for (const item of list) {
    //uzduodame item klausimus
    if (item > 0) {
        continue;
    }
    console.log(item)
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