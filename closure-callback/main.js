//Задание 1. Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию,
// которая принимает введенную строку и возвращает булевое значение true,
// если введенная строка совпадает с паролем и false – если не совпадает.

// var password = prompt("Password")
//
// function makePassword(password) {
//     var passw = 'admin';
//     return function(){
//         return console.log(password == passw)
//     }
// }
// var a = makePassword(password)
// a()

// Задание 2. Сделайте функцию, каждый вызов который будет генерировать случайные числа от 1 до 100,
// но так, чтобы они не повторялись, пока не будут перебраны все числа из этого промежутка.
// Решите задачу через замыкания - в замыкании должен хранится массив чисел, которые уже были сгенерированы функцией/

// function random() {
//     return Math.floor(Math.random() * 100);
// }
//
// function addRandom(){
//     var arr = []
//     return function (){
//         var rand = random();
//          for(;;){
//              if(!arr.includes(random)){
//                  arr.push(rand);
//                  break;
//              }
//          }
//         return arr;
//     }
// }
// var res = addRandom()
//
// console.log(res())
// console.log(res())
// console.log(res())
// console.log(res())
// console.log(res())
