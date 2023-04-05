// Дано натуральное число N. Выведите слово YES, если число N является точной степенью двойки, или слово NO в противном случае.
//        Операцией возведения в степень пользоваться нельзя!
//        Ввод 8: Вывод: YES
//        Ввод 3: Вывод: NO

let number = Number(8);

console.log(number);

if (typeof number === "number") {
  console.log("true");
} else {
  console.log("false");
}


if (number <= 0) {
    console.log("NO");
}
while (number > 1) {
    if (number % 2 != 0) {
        console.log("NO");
    } else {
        console.log("YES");
    }
    number /= 2;
};

//Дано натуральное число N. Вычислите сумму его цифр.
//        При решении этой задачи нельзя использовать строки, списки, массивы (ну и циклы, разумеется).
//        Ввод: 179
//        Вывод: 17

let number1 = 179;

let sum1 = Math.floor(number1 / 100);
let sum2 = Math.floor(number1 / 10);
let sum3 = number1 % 10
let sum4 = sum2 % 10;

// console.log(sum1);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);

let result = sum1 + sum3 + sum4;

console.log(result);
