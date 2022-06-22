// Задача 1. Дан массив пользователей [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40} ]. Отсортируйте его по возрасту.
// var arr =  [{name: 'Vasya', age: 24}, {name: 'Petya', age: 12}, {name: 'Fedya', age: 6}, {name: 'Ann', age: 18}, {name: 'Nastya', age: 40} ]
// console.log(arr) // ??? уже отсортирован?
// arr.sort(function (a,b){
//     if(a.age > b.age){
//         return 1;
//     }
//     if(a.age < b.age){
//         return -1;
//     }
//     return 0
// })
//
// console.log(arr)

//Задача 2. Напишите функцию filterFalse(arr), которая очищает массив от ложных (false) значений
// var arr = [NaN, 0, 77, false, -17, '', undefined, 99, null];
//
// function filterFalse(arr) {
//     var res = arr.filter(function (item,index) {
//         return item;
//     });
//     return res
// }
// // console.log(res,'\n',arr)
// console.log(filterFalse(arr));

// Задача 3. Напишите функцию find(arr, value), которая вернет массив всех индексом значения. (Не использовать метод find)

// var arr = [1,3,43,543,654,63,43,1,2,3,1,44,5,66,3]

// function find(arr,value){
//     var res =[];
//     for(var i = 0;i < arr.length; i++){
//         if(arr[i] == value){
//             res.push(i)
//         }
//     }
//     return res;
// }
// console.log(find(arr,3))

// function  find(arr,value){
//     var res = [];
//     arr.forEach(function (item,index){
//         if(item == value){
//             res.push(index)
//             // console.log(item,index)
//         }
//
//     })
//     return res
// }
// console.log(find(arr,3))

// Задача 4. Создать функцию createMatrix(row, col), принимающую количество строк и количество столбцов матрицы и возвращающее матрицу (массив массивов), заполненную случайными числами в диапазоне от 0 до 100 (random).
//     var random = Math.cail(Math.random()*100)

var row = +prompt("Row")
var col = +prompt("Col")

// function createMatrix(row, col){
//     var matrix = [];
//     for(var i = 0;i < row; i++){
//         var temp =[]
//         for(var j = 0; j < col; j++){
//             var random = Math.ceil(Math.random()*100);
//             temp.push(random)
//         }
//         matrix.push(temp)
//     }
//     return matrix;
// }

//
// console.log(createMatrix(row, col))
