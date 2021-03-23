//surasti kiek gimineje yra nariu

function memberCount(asmuo){
    let nariuKiekis = 1;

    if (asmuo.children){
        for (let i = 0; i < asmuo.children.length; i++){
            const child = asmuo.children[i];
            nariuKiekis += memberCount(child);
        }
    }

    return nariuKiekis;
}
const gimine1 = {
    name: 'Petras',
    age: 40,
    children: [
        {
            name: 'Maryte',
            age: 45,
            children: [
                {
                    name: 'Onute',
                    age: 70
                },
                {
                    name: 'Elvyra',
                    age: 66
                },
            ]
        },
        {
            name: 'Jonas',
            age: 43,
            children: [
                {
                    name: 'Aleksas',
                    age: 20,
                    children: [
                        {
                            name: 'Gokas',
                            age: 200
                        }
                    ]
                },
                {
                    name: 'Gabriele',
                    age: 80
                },
            ]
        },
    ]
}


const nariuKiekis = memberCount(gimine1);
console.log(nariuKiekis);