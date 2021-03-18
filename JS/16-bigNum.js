//Funkcija pavadinimu “didziausiasSkaiciusSarase”:

function bigNum(list) {
    // input validation
    if (!Array.isArray(list)) {
        return 'ERROR: netinkamas tipas, turi buti array (saras)';

    }
    if (list.length ===0 ) {
        return 'ERROR: netinkama reiksme null';
    }
    //logic
    let biggest = list[0];
    for (let i=0; i<list.length; i++) {
        const number = list[i];
        if (number > biggest) {
            biggest = number;
        }

    }


    //result


    return biggest;
}

console.log(bigNum('pomidoras'));
console.log(bigNum(4598));
console.log(bigNum(true));
console.log(bigNum(false));
console.log(bigNum(undefined));
console.log(bigNum());
console.log(bigNum(bigNum));
console.log(bigNum(null));

console.log(bigNum([]));


console.log(bigNum([1]), '->', 1);
console.log(bigNum([1, 2, 3]), '->', 3);
console.log(bigNum([-5, 78, 14, 0, 18]), '->', 78);
console.log(bigNum([69, 69, 69, 66, 69]), '->', 69);
console.log(bigNum([-69, -6, -69, -66, -9]), '->', -6);


