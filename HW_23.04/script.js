let table = document.body.firstElementChild;
for (let i = 0; i < table.rows.length; i++) {
    let step = table.rows.length;
    table.rows[i].cells[step - i - 1].innerHTML = "!";
}