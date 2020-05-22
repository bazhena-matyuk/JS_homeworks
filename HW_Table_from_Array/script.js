const data = [
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
const tbody = document.querySelector('table tbody');
const formAddUser = document.querySelector('form');
let editingTd;
let editArr = [];

function addUser(inputNameValue, inputSecondNameValue, inputAgeValue) {
    let tr = document.createElement('tr');
    console.log (inputNameValue);
    tr.innerHTML = `            
    <td>${inputNameValue}</td>
    <td>${inputSecondNameValue}</td>
    <td>${inputAgeValue}</td>`;
    addTdWithBtns (tr);
    tbody.append(tr);
}
function deleteUser() {
    let deleteTr = this.closest ('tr');
    deleteTr.remove ();
}
function editUser (){
    let tr = this.closest ('tr');
    
    let tdArr = tr.cells;
 
    for(let i = 0; i < tdArr.length; i++){
        if(tdArr[i].classList.contains('btns_td')){
        tdArr[i].innerHTML = `<button class="submit_btn">OK</button><button class="cancel_btn">Cancel</button>`;
        const submitBtn = tdArr[i].querySelector('.submit_btn');
        submitBtn.addEventListener('click', editRow);
        const cancelBtn = tdArr[i].querySelector('.cancel_btn');        
        cancelBtn.addEventListener('click', cancelEdit);
        }
        else{
        tdValue = tdArr[i].innerHTML;
        editArr.push(tdValue);
        let input =  document.createElement('input');
        input.value = tdValue;
        tdArr[i].innerHTML = '';
        tdArr[i].append(input);
        }   
    } 
    console.log(editArr);

     
}
function editRow(){
    const tr = this.closest('tr');
    const tdArr =  tr.cells;
    for(let i = 0; i < tdArr.length-1; i++){
        const value = tdArr[i].querySelector('input').value;
        tdArr[i].innerHTML = value;
    }
    tdArr[tdArr.length-1].remove();
    addTdWithBtns (tr);
}
function cancelEdit(){
    const tr = this.closest('tr');
    const tdArr =  tr.cells;
    console.log(editArr);
    
    for(let i = 0; i < tdArr.length-1; i++){ 
        const value = editArr[i];
        tdArr[i].innerHTML = value;
    }
    tdArr[tdArr.length-1].remove();
    addTdWithBtns (tr); 
    editArr = [];
    return editArr;
    
    
}
function addTdWithBtns (tr){
    let deleteUserBtn = document.createElement('button');
    let editUserBtn = document.createElement('button');
    let btnsTd = document.createElement('td');

    deleteUserBtn.className = 'delete_user_btn';
    editUserBtn.className = 'edit_user_btn';
    btnsTd.className = 'btns_td';
  
    deleteUserBtn.addEventListener('click', deleteUser);
    editUserBtn.addEventListener('click', editUser);

    deleteUserBtn.innerHTML = 'Delete';
    editUserBtn.innerHTML = 'Edit';
   

   
    btnsTd.append(editUserBtn);
    btnsTd.append(deleteUserBtn);
    tr.append(btnsTd);
    return editUserBtn;

}

for(let i = 0; i < data.length; i++) {
    let tr = document.createElement('tr');

    for(let key in data[i]) {
        let td = document.createElement('td');
        td.innerHTML = data[i][key];
        tr.append(td);
    }
    addTdWithBtns (tr);   
    tbody.append(tr);
}

formAddUser.addEventListener('submit', (event) => {
    event.preventDefault();
    let inputNameValue = event.target.querySelector('.input_name').value;
    let inputSecondNameValue = event.target.querySelector('.input_second_name').value;
    let inputAgeValue = event.target.querySelector('.input_age').value;
    addUser(inputNameValue, inputSecondNameValue, inputAgeValue);
    formAddUser.reset();
});