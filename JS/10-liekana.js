/*
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

*/

const nuo = -18;
const iki = 18;
const daliklis = 5;
let kiekis = 0;

for (let i = nuo; i <= iki; i++) {
    // keiciam console.log(i, i% daliklis);
    if (i % daliklis === 0){
        kiekis++;
        // tas pat kiekis += 1;
    }
}
const ats = `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${kiekis} vienetai.`;
console.log(ats);