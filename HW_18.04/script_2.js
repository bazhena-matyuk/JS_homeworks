const arrlength = 10;
let arr = []

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

for (let i = 0; i < arrlength; i++) {
    arr.push(randomInteger(0, 100));
    newArr = arr[i].toString().split('');
    newArr.forEach((element, index) => {
        if (Number(element) === 0) {
            newArr.splice(index, 1, 'zero');            
        }        
    });
    arr.push(newArr.join(''));
}
console.log(arr);