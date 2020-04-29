var data = [
    {
        firstName: 'Ashton',
        lastName: 'Kutcher',
        age: 40
    },
    {
        firstName: 'Bradley',
        lastName: 'Pitt',
        age: 54
    },
    {
        firstName: 'Hannah',
        lastName: 'Dakota',
        age: 24
    },
];



const foundNames = [];

const name = prompt('input name').toUpperCase();


for(let i = 0; i < data.length; i++) {
    if (data[i].firstName.toUpperCase() === name || data[i].lastName.toUpperCase() === name) {
        foundNames.push(data[i]);
    }
}

if (!foundNames.length) {
    console.log('No results found for your request');
} else {
    for (let i = 0; i < foundNames.length; i++) {
        console.log(foundNames[i]);
    }
}




