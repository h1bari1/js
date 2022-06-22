// Task 1
//Напишите функцию sumTo(n), которая вычисляет сумму чисел 1 + 2 + ... + n.
// function sumTo(n) {
//     if (n <= 0){
//         return n;
//     }
//     else {
//         return sum = n + sumTo(n - 1);
//     }
//     return sum;
// }
//
// console.log(sumTo(10))
// Task 2
// Напишите функцию toSum для вычисления суммы массива целых чисел.
// var array = [2, 3, 4, 5, 6, 7],
// i = 0,
// result = 0;
// function toSum(array) {
//     if (i === array.length){
//         return result;
//     }
//     else{
//         result += array[i]
//         i++
//         toSum(array);
//     }
//     return result;
// }
// console.log(toSum(array));
// Task 3
// Ваша задача - сделать функцию, которая возвращает сумму последовательности целых чисел.
// Последовательность определяется тремя неотрицательными значениями: начало, конец, шаг.
// Если начальное значение больше конца, функция должна вернуть 0

// var start = +prompt("Start")
// var end = +prompt("End")
// var step = +prompt("Step")
//
//
// function subsequence(start, end, step) {
//     if(end < start)  {
//         return 0;
//     }
//     else if(start == end){
//         return start;
//     }
//     else {
//         return start + subsequence(start + step, end, step)
//     }
//     return start;
// }
// console.log(subsequence(start, end, step))
