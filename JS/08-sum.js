/*
Suskaiciuoti ka gausime susumavus skaicius intervale tarp (imtinai)
Ats.: Intervale nuo 0 iki 4 suma yra 10.
0 - 0        =0
0 - 4  1pagal lengvuma =10
0 - 100 2ras =5050
574 - 815    =lb dkaicius
-50 - 50     =0
-70 - 30     =santykinai didelis neig skaicius
0-99999     astronominis sk

*/
const nuo = 1;
const iki = 1000;
let suma = 0;

if (nuo <= iki) {
    for (let i= nuo; i <= iki ; i++){
        suma +=i;
    }
} else {
    for (let i = iki; i<= nuo; i++) {
        suma +=i;
    }
}

for (let i= nuo; i < iki; i++) {
    suma +=i;
}
 // si keisim (pasinaudojus strin.js vardas taisykle) const ats = 'Intervale nuo ' + 'iki ' + iki + 'suma yra ' + suma + '.';
const ats = ` Intervale nuo ${nuo} iki ${iki} suma yra ${suma}.`;

console.log(ats);

