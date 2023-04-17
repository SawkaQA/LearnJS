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


let person = {
    salary: 1000,
    age: 25,
    info: [
        'Sasha',
        'SPB',
        'Pushkina 2'
    ]
} 


for (key in person) {
    if (Array.isArray(person[key])) {
      person[key].forEach(val => console.log(val));
  } else {
  console.log(`${key}: ${person[key]}`);
   }
  }

  // Задачи с codewars (8ky)