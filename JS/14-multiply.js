function daugyba(a, b) {
    //parametru validacija
    // jeigu a yra ne sk., grazinti klaidos pranesima
    // jeigu b yra ne sk., grazinti klaidos pranesima
   if ( typeof a !== 'number') {
       return 'Pirmasis parametras turi buti skaiciaus tipo';
   }
      if (isFinite(a)) {
    return `Pirmasis parametras turi buti normalus skaicius ir negali buti ${a}`;
}
 // ir a ir b parametrai turi po 3 patikras
   if ( typeof b !== 'number') {
    return 'Antrasis parametras turi buti skaiciaus tipo';
}

   if (isFinite(b))  {
    return `Antrasis parametras turi buti normalus skaicius ir negali buti ${b}`;
    // sia eil keicia virsutine  if (''+ b === 'NaN' || Math.abs(b) === Infinity)  {
    // si eilute susidaro is 3ju apatiniu . o virsutine jos sutrumpinimas if (isNaN(b) || b === Infinity || b === -Infinity) {
//   if (isNaN(b)) {
  //  return 'Antrasis parametras turi buti skaiciaus tipo';}
 //  if (b === Infinity) {
  //  return 'Antrasis parametras turi buti skaiciaus tipo';}
  // if (b === -Infinity) {
   // return 'Antrasis parametras turi buti skaiciaus tipo';
}
    // logika
    const rez = a * b;

    // rezultato grazinimas
    return rez;
}

console.log(daugyba('du', 5), '->', 20);
console.log(daugyba(44, 5), '->', 220);
console.log(daugyba(-44, -55), '->',2420);
console.log(daugyba(-44, 55), '->',-2420);
console.log(daugyba(-44, 'nulis'), '->', 0);
console.log(daugyba(0, 0), '->', 0);
console.log(daugyba(0, 54850), '->', 0);
console.log(daugyba(3.14, 2), '->', 6.28);

console.log(daugyba(3, 5), '->', 15);

console.log(daugyba(true, false));
console.log(daugyba(['asd'], 2));
console.log(daugyba(NaN, 2),);

console.log(daugyba(-Infinity, 2),);