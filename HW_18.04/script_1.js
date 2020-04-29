let word = prompt('input word').toUpperCase();
wordReverse = word.split('').reverse().join(''); 
let result = ( word === wordReverse) ? 'It is Palindrome!' : 'It is not Palindrome!'
console.log (word + ' => ' + result)

//Или так можно (длинный вариант записи)//
  /*if ( word === wordReverse){
    console.log ('It is Palindrome!');
  } else {
    console.log ('It is not Palindrome!');
  }*/

//Не для слов, а для целых предложений//
/*let strsentence = prompt('input sentence');
let sentence = strsentence.split(' ').join('').toUpperCase();
let strsentenceReverse = strsentence.split(' ').join('').toUpperCase().split('').reverse().join(''); 
let answer = ( sentence === strsentenceReverse ) ? 'It is Palindrome!' : 'It is not Palindrome!'
console.log (`${strsentence} => ${answer}`);*/