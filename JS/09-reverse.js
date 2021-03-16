/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo
pvz.: "abcdef" -> "fedcba"
*/

const text = 'abcdef';
let reverse = '';

for (let i = 0; i < text.length; i++) {
reverse = text[i] + reverse;
} 

console.log(text, '->', reverse);

// kitas variantas pagal nam7 darba

//for (let i = text.length - 1; i >= 0; i--) {
 //   reverse += text[i];
//}
//for (let i = text.length; i > 0; i--) {
  //  reverse += text[i-1];
//}

const pirmaszodis = 'Lietuva';
reverseString(pirmaszodis);

reverseString('gimtine');
reverseString('sedek uz kedes');

function reverseString(text) {
let reverse = '';

for (let i = 0; i < text.length; i++) {
reverse = text[i] + reverse;
} 

console.log(text, '->', reverse);
}