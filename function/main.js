// Задача 1
// В бесконечном цикле делается запрос на ввод двух чисел (два отдельных вызова функции prompt()).
// Числа сравниваются между собой, и выводится одна из трёх фраз: «числа равны», «первое число меньше»,
// «второе число меньше». Если пользователь ввёл не число, выводится фраза «первый ввод – не число»
// (или «второй ввод – не число»), и выполнение скрипта прекращается.
// ------------------------
// var res;
//
// function compare(num1, num2) {
//     if (num1 > num2) {
//         res = console.log("1 biggest 2");
//     } else if (num2 > num1) {
//         res = console.log("2 biggest 1");
//     } else if (num1 == num2) {
//         res = console.log("Equal");
//     }
//     return res
// }
//
// while (true) {
//     var num1 = +prompt("1num")
//     var num2 = +prompt("2num")
//     compare(num1, num2)
//     if (isNaN(num1)) {
//         res = console.log("Первый ввод не число");
//         break;
//     } else if (isNaN(num2)) {
//         res = console.log("Второй ввод не число");
//         break;
//     }
// }
// ---------------------
// Задача 2
// Многоквартирный дом характеризуется следующими тремя показателями: этажность (1-25), число подъездов (1-10),
// количество квартир на лестничной площадке (1-20). Скрипт запрашивает эти показатели и номер квартиры.
// Выводится номер подъезда, в котором находится указанная квартира.
// При вводе некорректных данных предусмотреть генерацию исключительных ситуаций.

// ??????????????????????????????????????????????

// Задача 3
// Написать функцию, получающую на вход два числа. Если оба числа чётные - функция возвращает их произведение.
// Если оба числа нечётные - функция возвращает их сумму.
// Если одно из чисел чётное, а второе нечётное - функция возвращает это нечётное число.

// var num1 = +prompt("Num 1")
// var num2 = +prompt("Num 2")
// var res;
// function check(n1,n2) {
//     if (n1 % 2 == 0 && n2 % 2 == 0) {
//         res = n1 * n2
//     } else if (n1 % 2 != 0 && n2 % 2 != 0) {
//         res = n1 + n2
//     } else if (n1 % 2 != 0) {
//         res = n1
//     } else if (n2 % 2 != 0) {
//         res = n1
//     }
//     return res
// }
// console.log(check(num1,num2));

// Задача 4
// На декартовой плоскости прямоугольник задаётся четырьмя точками – своими вершинами (у каждой точки две числовые координаты).
// Вершины перечисляются последовательно, в порядке обхода по часовой стрелке, начиная с произвольной вершины.
// Написать функцию, проверяющую, образуют ли заданные восемь чисел вершины некоего прямоугольника.

// ?????????????????????????

// Задача 5
// Функция getSequence(start, step) при вызове возвращает функцию-генератор.
// Каждый вызов генератора возвращает новое число в числовой последовательности.
// start – стартовое число (по умолчанию 0). step – шаг приращения (по умолчанию 1).
