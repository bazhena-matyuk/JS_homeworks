let table = document.querySelector('table')
var data = [
    {    
    firstName: 'Ashton',    
    lastName: 'Kutcher',    
    age: 40    
    }, {    
    firstName: 'Bradley',    
    lastName: 'Pitt',    
    age: 54    
    }, {    
    firstName: 'Hannah',    
    lastName: 'Dakota',    
    age: 24    
    }    
    ];

document.querySelector('#my_table tbody').innerHTML += data.map(i => `
    <tr>
      <td>${i.firstName}</td>
      <td>${i.lastName}</td>
      <td>${i.age}</td>
    </tr>
  `).join('');