function suma(a, b) {
    return a+b;

}
const atsSuma = suma(8, 5);
console.log(atsSuma);
/********* kitas budas/ */
//bevardes funkcijos priskyrimas kintamajam
const atimtis = function (a, b) {
    return a - b;

}
const atsAtimtis = atimtis(8, 5);
console.log(atsAtimtis);  

/******** */
//arrow funkcijos priskyrimas kintamajam vietoj function irasom=>

const daugyba = (a,b) => {
    return a*b;
}
const atsDaugyba = daugyba(8, 5);
console.log(atsDaugyba);

/********** */
//arrow priskyrimas kintamajam
//jei logika turi tik viena procedura tai galima nerasyt {}  ir reurn
const dalyba = (a,b) => a/b;

const atsDalyba = dalyba(8, 5);
console.log(atsDalyba);

/*********** */
//jeigu parametru tik vienas, tai galima nerasyti ()
const kvadratu = (a) => a * a;  // arba a * 2

const atsKvadratu = kvadratu(8);
console.log(atsKvadratu);

/***pavyzdziai uzdaviniu */
/************* */
/********************** */

const vardas = 'Vardenis';
const pirmaRaide = name => name[0];

    const raide = pirmaRaide(vardas);
    console.log(raide);

/*****paskutine raide */
const vardas = 'Vardenis';
const pirmaRaide = name => name[0];
const paskutineRaide = name => name[name.lenght -1];


    const raide = pirmaRaide(vardas);
    const paskutine = paskutineRaide(vardas);
    console.log(raide);
    console.log(paskutine);