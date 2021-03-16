function pazymiuVidurkis(vardas, pazymiai) {
//vardenis: pazymiu vidurkis yra 6.
console.log(`${vardas}: pazymiu vidurkis yra 6.`);

}
pazymiuVidurkis('Petriukas', [10, 2, 8, 4]);
pazymiuVidurkis('Maryte', [10, 8, 6, 4]);
pazymiuVidurkis('Alphe', [10, 9, 8, 10, 9, 2]);

const mokykla = [
 ['Petriukas', [10, 2, 8, 4]];
 ['Maryte', [10, 8, 6, 4]];
 ['Alphe', [10, 9, 8, 10, 9, 2] ];
] ;

for (let i = 0; i < mokykla.length; i++) {
    const mokinys = mokykla [i];
    const name = mokinys[0];
    conat marks = mokinys[1];4

    mazymiuVidurkis(name, marks)
}