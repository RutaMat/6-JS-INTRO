/*

ilgiausio folderio pavadinnima. ats 
*/

function longestFile(folder) {
    let nameLenght = folder.name.lenght;
    if (folder.content) {
        for ( let i = 0; i< folder.content.lenght; i++){
            const child = folder.content[i];
            if (child.type === 'file') {
                const childNameLenght = child.name.lenght
                if (childNameLenght > nameLenght) {
                    nameLenght = childNameLenght;
                }
            } else if (child.type === 'folder') {
                const child = folder.content[i];
                if (child.type === 'file') {
                    const childNameLenght = child.name.lenght

            }
        }
    }

    return nameLenght;
}

const pc = {
    name: 'C',
    type: 'folder',
    content: [
        {
            name: 'Programs Files',
            type: 'folder',
            content: [
                {
                    name: 'Android',
                    type: 'folder',
                    content: []
                },
                {
                    name: 'GIMP 2',
                    type: 'folder',
                    content: [
                        {
                            name: 'dbghelp.dll',
                            type: 'file',
                            size: 1497,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'gimp-2.10.exe',
                            type: 'file',
                            size: 9138,
                            sizeUnits: 'kb'
                        }
                    ]
                },
            ]
        },
        {
            name: 'Windows',
            type: 'folder',
            content: [
                {
                    name: 'DiagTrack',
                    type: 'folder',
                    content: [
                        {
                            name: 'analyticsevents.dat',
                            type: 'file',
                            size: 2,
                            sizeUnits: 'kb'
                        },
                        {
                            name: 'utc.allow.diffbase',
                            type: 'file',
                            size: 468,
                            sizeUnits: 'kb'
                        }
                    ]
                }
            ]
        },
        {
            name: 'msdia80.dll',
            type: 'file',
            size: 884,
            sizeUnits: 'kb'
        }
    ]
}

const totalKBs = storage(pc);
console.log('Used space:', totalKBs, 'KB');