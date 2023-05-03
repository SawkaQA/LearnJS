// let arr = ['{', ')', '[', '(', ')', ']', '}', '[', ']', ']'];
// let str = arr.toString().replaceAll(',', ''); //= {)()}[]]
// for (let i = 0; i < str.length - 1; i++) { // i=0, 1, 2, 3, 4, 5
//     for (let j = i + 1; j < str.length; j++) { // j= 1, 2, 3, 4, 5, 6 
//         if (str[i] == "(" && str[j] == ")" || str[i] == "{" && str[j] == "}" || str[i] == "[" && str[j] == "]") {
//             console.log(' replace I' + i + ' J' + j + ' - ' + str[i] + str[j]);
//             str = str.replace(str[j], '').replace(str[i], '');
//             //Здесь строка стала на 2 символа короче 
//             //str[i] после этой строки уже будет на 1 символ правее
//             //str[j] будет на 2 символа правее, но нам все равно, т.к. из цикла j мы выходим по break
//             i -= 1;//компенсируем сдвиг уменьшив i на 1. На следующей итерации к нему прибавят 1 и оно останется тем же, а символ под этим номером будет уже следующий.
//             break;
//         }
//     }
// }
// console.log(str);




function validator(arr) {

    const types = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    let result = []
    
    let errors = {}
    
    for (let i = 0; i < arr.length; i++) {
            if (Object.keys(types).includes(arr[i])) {
                result.push(arr[i])
                errors[i + 1] = arr[i]
            } else if (Object.values(types).includes(arr[i])) {
                if (types[result[result.length - 1]] === arr[i]) {
                    result.pop()
                    delete errors[i]
                }
                else {
                    errors[i + 1] = arr[i]
                }
            } else {
                console.log(`${i+1} ${arr[i]}`)
                break;
            }
    }
    return (Object.entries(errors).forEach(error => console.log(error.toString())))
    }

    console.log(validator(['{', ')', '[', '(', ')', ']', '}', '[', ']', ']']));


// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.

let firstMonth = 'August'
let secondMoth = 'July'


if (firstMonth === 'August' || secondMoth === 'July') {
    console.log('approved')
} else {
    console.log('denied')
}


let persons = {
    salary: 1000,
    age: 25,
    info: [
        'Sasha',
        'SPB',
        'Pushkina 2'
    ]
} 


for (key in persons) {
    if (Array.isArray(persons[key])) {
      persons[key].forEach(val => console.log(val));
  } else {
  console.log(`${key}: ${persons[key]}`);
   }
  }

  // Калькулятор с помощью switch, с обработкой возможных ошибок

let num1 = 11
let num2 = 5
let operator = '/'

switch (operator) {
    case '+':
        result = num1 + num2
        console.log('The result is ' + result)
        break;
    case '-':
        result = num1 - num2
        console.log('The result is ' + result)
        break;
    case '*':
        result = num1 * num2
        console.log('The result is ' + result)
        break;
    case '/':
        if (num2 != 0) result = num1 / num2
        else result = "You can't divide by 0"
        console.log('The result is ' + result)
        break;

    default: 
        console.log('Unknown operation, please enter correct operator');
    
}


// Создайте функцию deepCount, которая будет считать количество всех элементов в массиве, включая и вложенные массивы.

// Вариант с циклом
function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
    return count;
}

// Вариант с методом reduce
function deepCount(a){
    return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
}



// Задача с персонажем и HP

const person = {
    hp: 100,
    mp: 100,
  };
  
  const potions = [
    { id: 1, type: 'POSITIVE', attribute: 'HP', value: 10 },
    { id: 2, type: 'POSITIVE', attribute: 'MP', value: 10 },
    { id: 3, type: 'NEGATIVE', attribute: 'HP', value: 5 },
    { id: 4, type: 'NEGATIVE', attribute: 'MP', value: 5 },
  ];
  
  const inventory = [
    { potionId: 1, count: 5 },
    { potionId: 2, count: 4 },
    { potionId: 3, count: 3 },
    { potionId: 4, count: 2 },
  ];
  
  for (let i = 0; i < inventory.length; i++) {
    const stack = inventory[i];
    let potion;
  
    for (let k = 0; k < potions.length; k++) {
      if (potions[k].id === stack.potionId) {
        potion = potions[k];
      }
    }
  
    for (let j = 0; j < stack.count; j++) {
      const multiplier = potion.type === 'NEGATIVE' ? -1 : 1;
  
      switch (potion.attribute) {
        case 'HP':
          person.hp += multiplier * potion.value;
          break;
        case 'MP':
          person.mp += multiplier * potion.value;
          break;
      }
    }
  }
  
  console.log(person)


  // Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

let str = 'abc def ghi jkl mno pqr stu';

function findWord(word, str) {
  return RegExp('\\b'+ word +'\\b').test(str)
}

console.log(findWord('mno', str));


