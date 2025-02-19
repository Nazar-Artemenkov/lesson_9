// Задания:
// Объявление и вызов функции
// Создайте функцию sayHello, которая принимает имя и выводит в консоль приветствие в формате:
// "Hello, <имя>!"

// Функция сложения
// Создайте функцию sum, которая принимает два числа и возвращает их сумму.

// Функция проверки четного числа
// Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.

// Анонимная функция умножения
// Создайте анонимную функцию, которая принимает два числа и возвращает их произведение. Присвойте эту функцию переменной multiply.

// Стрелочная функция для вычисления квадрата
// Создайте стрелочную функцию square, которая принимает число и возвращает его квадрат.

// Функция с параметром по умолчанию
// Создайте функцию greet, которая принимает имя и выводит приветствие. Если имя не передано, используйте "Guest" по умолчанию.

// Использование шаблонных строк
// Создайте функцию introduce, которая принимает имя и возраст и возвращает строку в формате:
// "My name is <имя> and I am <возраст> years old."

// Функция с возвратом строки
// Создайте функцию getFullName, которая принимает firstName и lastName и возвращает полное имя.

// Стрелочная функция с несколькими параметрами
// Напишите стрелочную функцию divide, которая принимает два числа и возвращает их результат деления.

// Функция, возвращающая максимальное число
// Создайте функцию getMax, которая принимает два числа и возвращает большее из них.



function sayHello(name1){
    console.log(`Hello, ${name1}!`);
}
res = sayHello("Nazar");

function sum(a, b){
    return a + b;
}
res1 = sum(1, 1)
console.log(res1);



function isEven(number){
    return number % 2 == 0
}
res3 = isEven(5)
console.log(res3);

const multiply = function(a, b){
    return a * b;
}
res4 = multiply(2, 2)
console.log(res4);

const square = num=> num * num;
res5 = square(3)
console.log(res5);


function greet(name){
    console.log(`Hello, ${name}!`);
    
}

greet("Guest")

function introduce(name, number){
    console.log(`My name is ${name}, and I am ${number} years old.`);
    
}
res7 = introduce("Nazar", 18)



const divide = (a, b)=> a/b;
res8 = divide(10, 2)
console.log(res8);


const getMax = (a, b)=> a > b ? a : b;
res9 = getMax(10, 50)
console.log(res9);
