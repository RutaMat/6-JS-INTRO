//Gimines medyje reikia rasti kas buvo yra vyriausias

function oldest(asmuo) {

    let biggestAge = asmuo.age;
    let childAge = 0;

    if (asmuo.children) {
        for (let i=0; i<asmuo.children.length; i++) {
            const child = asmuo.children[i];
//esme to pacio asmens pradine funkcija su gilesne info. si eliute pagr.si eil sukasi begale kartu. cia ne raktazodis. funkcijos pavadinimas kuris atlieka paieska.
            childAge = oldest(child);

            if (childAge > biggestAge) {
                biggestAge = childAge;
            }
        }
    }
    return biggestAge;
    
}
const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        { 
            nare: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 78
                },
                {
                    name: 'Elvyra',
                    age: 55
                }
            ]
        },
        {
            nare: 'Jonas',
            age: 43
        }
    ]
}

const vyriausias = oldest(gimine1);
console.log(vyriausias)