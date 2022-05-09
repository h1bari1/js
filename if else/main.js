// const  officialName = prompt("What's the \"официальное название\" JavaScript?\n",'?')
// let message =  (officialName == 'ECMAScript') ? alert('good') : alert('No good')

// const value = +prompt('Enter number')
// if (value < 0){
//     alert('< 0')
// }else if (value > 0){
//     alert('> 0')
// }else if(value == 0){
//     alert('0')
// }else {
//     alert('nooooo')
// }

// let res;
//
// res = (a + b + 4) ? 'Malo' : 'Mnogo'


//----------------4.8----------------
// const foots = prompt('Enter miles')
// const kilometers = prompt('Enter kilometers')
//
// let convertFoots = foots * 0.305
// let convertKilometers = kilometers * 1000
//
// let res = (convertFoots > convertKilometers) ? alert('foots biggest') : alert('kilometers biggest')
//----------------4.9----------------
// const  kilometerInHour = +prompt('Kilometers')
// const  meterInSecond = +prompt('Meter')
// const meterInKilometer = meterInSecond * 3.6
//
// let res = (meterInKilometer > kilometerInHour) ? alert('meter in second is biggest') : alert('kilometer in hour is biggest')
//----------------4.10----------------
// const radius = +prompt('Enter radius')
// const width = +prompt('Enter width')
//
// const squareCircle = 3.14 * (radius**2)
// const squareFoursquare = width * 4
//
// if (squareCircle > squareFoursquare) {
//     alert('Square Circle is biggest')
// }else if(squareCircle < squareFoursquare){
//     alert('Square Foursquare is biggest')
// } else {
//     alert('Error')
// }
//----------------4.13 - 4.14----------------
// let a = +prompt('Enter a')
// let b = +prompt('Enter b')
// let c = +prompt('Enter c')
// d = (b ** 2) - (4 * a * c)
// if (d > 0) {
//     alert('2 Square root')
//     let x1 = (-b - (d**0.5))/ (2 * a)
//     let x2 = (-b + (d**0.5))/ (2 * a)
//     alert(`x1 ==  ${x1} \nx2 ==  ${x2}`)
// } else if (d === 0) {
//     alert('1 Square root')
//     let x1 = (-b - (d**0.5))/ (2 * a)
//     alert(`x1 ==  ${x1} `)
// } else if (d < 0){
//     alert('No Square root')
// }
//----------------4.15----------------
// const mainYear = +prompt('Enter main year')
// const mainMonth = +prompt('Enter main month')
// const birthYear = +prompt('Enter birth year')
// const birthMonth = +prompt('Enter birth month')
//
// let years = mainYear - birthYear
// if (mainMonth < birthMonth){
//     alert(years-=1)
// } else if (mainMonth > birthMonth){
//     alert(years)
// }
//
// let age = +prompt('Enter yor age')
//
// if (age <= 90 && age >= 14){
//     alert('Okay')
// }else {
//     alert('No okay')
// }
// if (!(age <= 90 && age >= 14)){
//     alert('Okay')
// }else {
//     alert('No okay')
// }
//

// let login = prompt('Enter login')
//
// if (login === 'admin'){
//     let pass = prompt('Enter pass')
//     if (pass === 'iamboss'){
//         alert('Welcome')
//     }else {
//         alert('incorrect pass')
//     }
// }else {
//     alert('Incorrect login')
// }

// ДЗ 2. Задачи на конструкции if, switch
//

//

//
//
//

// Задача 1. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).
// let min = +prompt("Enter time")
// if (min >= 0 && min <= 15){
//     alert("Perv")
// } else if(min >= 16 && min <= 30){
//     alert("Vt")
// }else if(min >= 31 && min <= 45){
//     alert("Tr")
// }else if(min >= 46 && min <= 59){
//     alert("Cht")
// }


// Задача 2. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
// let a = 1
//
// if (a === "1"){
//     console.log("Good")
// } else{
//     console.log("No")
// }

// Задача 3. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью (тернарное выражение) и с длинной.
// let test = true
// if (test){
//     console.log('Верно')
// } else if (!test){
//     console.log('NE Верно')
// }
//var res = (test) ? console.log('Верно') : console.log('NE Верно')

// Задача 4. Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2.

// let a = 4
//
// let res = (a > 0 && a < 5) ? console.log('Верно') : console.log('NE Верно')

// Задача 5. Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case.

// let num = +prompt("Enter number")
// let result = ""
// if (num < 1 || num > 4 ){
//     console.log("Error")
// }
//
// switch (num){
//     case 1 :
//         console.log("Winter");
//         break;
//     case 2 :
//         console.log("Spring");
//         break;
//     case 3 :
//         console.log("Summer");
//         break;
//     case 4 :
//         console.log("Autumn");
//         break;
// }
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Задача 1. В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).

// var min = +prompt("Ведите число от 0 до 59");
//
// if (min > 0 && min < 59){
//     if (min > 0 && min <= 15){
//         console.log("Первая половина")
//     }else if (min > 16 && min <= 30){
//         console.log("Вторая половина")
//     }else if (min > 30 && min <= 45){
//         console.log("Третья половина")
//     }else{
//         console.log("Четвертая половина")
//     }
// }else{
//     console.log("Не входит в диапазон")
// }

// Задача 2. Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при a, равном '1', 1, 3.

// var a = +prompt("Enter num")
//
// var res = a === '1' ? "True" : "False"
// console.log(res)
// Задача 3. Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Проверьте работу скрипта при test, равном true, false.
// Напишите два варианта скрипта - с короткой записью (тернарное выражение) и с длинной.

// var test = true
//
// var res1 = test != true ? "Верно" : "Не верно"
// console.log(res1)
//
// if (!test){
//     console.log("Верно")
// }else{
//     console.log("Не верно")
// }



