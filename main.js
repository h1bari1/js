// var testForm = document.forms.testForm
// var input = testForm.select
// var placeholder = input.placeholder
// input.addEventListener('focus',function(e){ // нажатие на инпут
//     input.placeholder = ''
// })
// input.addEventListener('blur',function(e){ //нажатие вне поля
//     input.placeholder = placeholder
// })
// input.addEventListener('input',function (e){ // live получение значений в поле ввода
//     console.log(input.value)
// })
// input.addEventListener('change',function (e){  // получает значения после смены фокуса
//     console.log(input.value)
// })
// input.addEventListener('change',function (e){  // получает значения после смены фокуса
//     console.log(input.value)
// })

// var testForm = document.forms.testForm
// var input = testForm.textarea
// var placeholder = input.placeholder
// input.addEventListener('copy',function(e){ //отслеживание копирования
//
//     console.log('copy')
// })
// input.addEventListener('paste',function(e){//отслеживание вставки
//     e.preventDefault()
//     console.log('paste')
//
// })
// input.addEventListener('cut',function(e){//отслеживание вырезания
//     console.log('cut')
// })
// var testForm = document.forms.testForm
// testForm.addEventListener('submit',function (e){  // Submit
//     console.log('Loading......')
//     if(!testForm.text.value){
//         console.log('error')
//         e.preventDefault()
//         return false
//     }
// })
// var testForm = document.forms.testForm
// var input = testForm.text
// var placeholder = input.placeholder
// input.addEventListener('change',function(e){
//     testForm.submit()                       // отправка при смене фокуса
// })
// var testForm = document.forms.testForm
// var file = testForm.file
// file.addEventListener('change',function (e){
//     var pic = file.files[0]
//     var url = URL.createObjectURL(pic)    // получение ссылки файла
//     console.log(url)
//     var img = document.createElement('img')
//     img.src = url
//     testForm.append(img)
// })
// -------------------------------------------------REGULAR----------------------------------------

// var reg1 = /test/igm;
// var reg2 = new RegExp('test','igm')

// function check(str,reg){
//     return reg.test(str)
// }
// console.log(check('My name is Pall', /name/igm))
// var str = 'My name is Pavel pavel';
// var reg = /pavel/ig
// // i - убирает чувствительность к регистру
// // g - глобальный поиск
// // m - мультипоиск
// console.log(str.match(reg))
// -------------------------------------------------
// var str = 'My name is Pavel pavel';
// var reg = /pavel/i
// console.log(str.match(reg))
// console.log(reg.test(str)) //  true / false если нашло
// console.log(str.replace(reg,'test'))

// \d - любая цифра 0 - 9
// \w - любая цифра a - z 0 - 9 _
// \s - пробел
// \D - все кроме цифр
// \W - все кроме a - z 0 - 9
// \S - все кроме пробела
// . - все кроме \n
// \b -

// var str = 'My name is Pavel pavel';
// var reg = /\d/
// console.log(reg.test(str))

// var str = 'My name is Pavel pa.vel';
// var reg = /\^\$\./igm
// var reg1 = new RegExp('\\^\\$\\. ','igm')
// console.log(reg.test(str))


// -----------наборы-----------  []
// var str = 'My name is  pavel';
// var reg = /[\d]/ig
// console.log(reg.test(str))
//
// //^ - начало


//---------------------------------------------------------------Tasks-------------------------------
//Task 1
// var error = document.querySelector('.error')
// var form = document.forms.formInfo
//
// var price = form.price
// var desc = form.description
// var btn = form.submitBtn
//
// function checkName(userName) {
//     var reg = /^([a-z]|[а-я]){1,25}$/ig
//     var res = reg.test(userName)
//     console.log('name res',res)
//     return res
//
// }
//
// function checkPrice() {
//     var val = price.value;
//     var reg = /^(\d{2})[,.](\d{2}((шт)|(кг)|(л)|(ед)))/i
//     var res = reg.test(val)
//     return res
// }
// function checkDescription(){
//
// }
// form.addEventListener('submit', function (e) {
//     error.innerHTML = ''
//     var name = form.userName.value
//     console.log(name)
//     if (!checkName(name)) {
//         e.preventDefault()
//         error.innerHTML = 'Many symbols \n'
//     } else {
//         console.log('name true')
//     }
//     console.log(checkPrice())
//     if (!checkPrice()) {
//         e.preventDefault()
//         console.log('false kg')
//         error.innerHTML = 'Incorrect input \n'
//     }
//
// })

//Task 2
// Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярку, которая найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'.
// var str = 'ahb acb aeb aeeb adcb axeb'
// var reg = /a[\\w]b/ig
// var res = str.match(reg)
// console.log(res)


//Task 3
// Дана строка '*+ *q+ *qq+ *qqq+ *qqq qqq+'. Напишите регулярку, которая найдет строки *q+, *qq+, *qqq+, не захватив остальные.

// var str = '*+ *q+ *qq+ *qqq+ *qqq qqq+'
// var reg = /\*?q+\+/ig
// var res = str.match(reg)
// console.log(res)

//Task 4
// Выбрать существующие даты между 1000 и 2012 годом. Секунды могут быть опущены.
//     облегчаем задачу: в каждом месяце 30 дней.
// 2012/09/18 12:10 — true
// 2013/09/09 09:09 — false (после 2012)

// var str = '2012/09/18 12:10'
// var reg = /(([1]\d{3}|([2]0[0-1])[0-2])\/[0-1]\d\/[1-3]\d) (([1]\d)|([2][0-3])\:[0-5]\d)/ig
// var res = reg.test(str)
// console.log(res)

