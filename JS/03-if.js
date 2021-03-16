/*
IF statment:

logikos sablonai
if() {}
if() {} else {}
if() {} else {}...else if {}

paltyginimo operatoriai:
-visi: >, <, >=, <=,  =reiskia operatoriaus prilyginimas, === grieztas lygumas, !== grieztas nelygu
-naudotini !-priesinga reiksme
-nenaudotini != reiskia  nelygu, == reiskia lygu (nes nenaudojamas reiksmiu tipas)

*/

const a = 7;
const b = 4;

if (a > b) {
    
    const ats = `${a} yra daugiau uz ${b}`;
    console.log(ats)

    }

console.log("------");

    const c = 7;
    const d = 4;

    if (c < d) {
        const cdMaziau = `${c} yra maziau uz ${d}`;
        console.log(cdMaziau);
    } else {
        const cdNeMaziau = ` ${c} yra Nemaziau uz ${d}`
        console.log(cdNeMaziau)       
            }
               
console.log("------");   

const e = 8
const f = 9
if (e == f) {
    console.log( "TAIP");
} else {
    console.log("NE")
}
console.log("------");  

const cookiesAgreed = true;

if (cookiesAgreed === true) {

    console.log('Ismetame cookies sutikimo bloka...1');

}
if (!cookiesAgreed ) {

    console.log('Ismetame cookies sutikimo bloka...2');

}
console.log("------");  

//ar vartotojas prisijunges
const userLogginIn = true;
if (userLogginIn) {
    console.log('Log out');
    } else {
        console.log('Log in');
    }

    console.log("------");  
// tokiu atv suskaiciuoja simboliu kieki .length - skaiciuoja auto
    const pomidoras = 'pomidoras ........';
    const pomidoroIlgis = pomidoras.length;
    
    console.log(pomidoroIlgis);

    console.log("------");  
    // sablono else if naudojimas
const akys = 'Rudos';

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else if (akys === 'Zalios') {
    console.log('Sexy 💘');
} else if (akys === 'Rudos') {
    console.log('Melagis?👌');
}else if (akys === 'Pilkos') {
    console.log('Niekuo neipatingi...');
}
// ta pati kaip pries uzduotis tik kitu budu

if (akys === 'Melynos') {
    console.log('Oi kokie fainulkos!!!');
} else 
{
     if (akys === 'Zalios') {
        console.log('Sexy 💘')
    } else {
        if (akys === 'Rudos') {
            console.log('Melagis?👌');
        } else {
            if (akys === 'Pilkos');
            console.log('Niekuo neipatingi...');
        } else {
   
    console.log('A tu turi akis?'); }
   }
}

