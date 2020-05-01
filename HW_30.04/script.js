let data = [
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

const addUserBtn = document.querySelector('.add_user_btn');
addUserBtn.addEventListener('click', addUser);

const deleteUserBtn = document.querySelector('.delete_user_btn');
deleteUserBtn.addEventListener('click', deleteUser);

const editUserBtn = document.querySelector('.edit_user_btn');
editUserBtn.addEventListener('click', editUser);

let tbody = document.querySelector('table tbody');

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }

    tbody.append(tr);
}

function addUser() {
    let firstName = prompt('input first name', 'Elena');
    let lastName = prompt('input last name', 'Petrova');
    let age = prompt('input age', 32);
    let tr = document.createElement('tr');
    tr.innerHTML = `            
    <td>${firstName}</td>
    <td>${lastName}</td>
    <td>${age}</td>`;
    tbody.append(tr);
}

function deleteUser() {
    let deleteUserData = prompt('input first name or last name or age');
    tdArr = tbody.querySelectorAll('td');
    for(let i = 0; i < tdArr.length; i++) {
        if (deleteUserData === tdArr[i].innerHTML) {
                let tr = tdArr[i].closest('tr');
                tr.remove();
        }
    }
}

function editUser() {
    let editUserData = prompt('input first name or last name or age');
    tdArr = tbody.querySelectorAll('td');
    for(let i = 0; i < tdArr.length; i++) {
        if (editUserData === tdArr[i].innerHTML) {
            let firstName = prompt('input first name', 'Svetlana');
            let lastName = prompt('input last name', 'Ivanova');
            let age = prompt('input age', 30);
            let tr = tdArr[i].closest('tr');
            tr.innerHTML = `            
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${age}</td>`;
            tbody.replaseWith(tr);
        }
    }
}