// var body = document.body
// var child = body.firstChild
// var child = body.lastChild
// var child = body.childNodes //получение всех элементов ввиде коллекции----->
// for(var node of child){ // in - лючи , of - значения
//     console.log(node)
// }
// var prev = body.previousSibling // предыдущий элемент
// var next = body.nextSibling  // следующий  элемент
// console.log(prev)
// console.log(next)
// var parent = body.parentNode // родительский элемент
// console.log(parent)
// var children = body.children // дочерние элементы
// console.log(children)
// ------------------------
// var elems = document.querySelectorAll('.list-item')[0] // все элементы по селектору
// console.log(elems)
// ------------------------
// var elem = document.querySelector('.list-item') // первый элемент по селектору
// console.log(elem)
// ------------------------
// var elem = document.getElementById('list') //поиск по id
// ------------------------
// var elem = document.getElementsByTagName('li') //поиск по тегу
// ------------------------
// var elem = document.getElementsByClassName('list-link') //поиск по классу
// ------------------------
// var elem = document.querySelector('.list-item')
// console.log(elem)
// var test = elem.querySelector('span')
// console.log(test)
// ------------------------
// var elem = document.querySelector('span')
// var testDiv = elem.closest('.test-div') // поиск по родителям
// console.log(testDiv)
// ------------------------

// var elems = document.querySelectorAll('.list-link')
// elems.forEach(function (elem){
//     if(elem.matches('.active')){ // matches - поиск по наличии селектора
//         console.log(elem,'active')
//     }else{
//         console.log(elem,'no active')
//     }
// })
// -------------------------

// var elem = document.querySelector('h1');
// var title = elem.innerHTML // возвращает содержимое тега
// elem.innerHTML += '<p>test</p>'
// var str = '!!!!!'
// // elem.innerHTML = title.replace(',','!!!')
// elem.innerHTML = title.split(',').join(str)
// console.log(title)

// -----------------------------
// var elem = document.querySelector('h1');
// var title = elem.outerHTML  // возвращает сам тег с содержимым
//
// console.log(title)

// -------------------------------
// var elems = document.querySelectorAll('.list-link');
// // var title = elem.textContent  // возвращает только текст внутри
// elems.forEach(function (elem,i){
//     elems[i].textContent = elem.matches('.active') ? 'active' : 'no active'
// })
// console.log(title)
// ---------------------------------
// var div = document.createElement('div')
// div.innerHTML = '<span>Test</span>'
// var list = document.querySelector('#list')
// // list.before(div) // перед элементом который нашли
// // list.after(div) // после
// list.prepend(div) // нутрь вначало
// list.append(div) // нутрь вконец

// var elem = document.querySelector('h1');
// var list = document.querySelector('#list');
// list.append(elem) // вырезал и вставил в конец
//
// console.log(elem)
// console.log(list)

// -------------------------------
// var elem = document.querySelector('h1');
// var list = document.querySelector('#list');
// var clone = elem.cloneNode(true); // копирует и вставляет. если true  то копирует тег с содержимым
// console.log(clone)
// elem.remove() // удаляет элемент
//---------------------------------
//
// var elem = document.querySelector('.list-link');
// var className = elem.className  // получаем класс элемента
// // elem.className = 'test2' // замена класса
// // elem.className += ' test2' // добавление класса
//
// console.log(className)

// --------------------------
// var elem = document.querySelector('.list-link');
// elem.classList.add('test2') // добавить класс !!!!!!!!!! лучше className
// elem.classList.remove('test2') // удалить нужный класс
// elem.classList.contains('test2') // возвращает true or false  на наличие класса у элемента
// var elems = document.querySelectorAll('.list-link');
//
// elems.forEach(function (elem){
//     var chek = elem.classList.contains('test')
//     if(chek){
//         elem.classList.add('yellow')
//         console.log(elem,'active')
//     }else {
//         elem.classList.add('red')
//         console.log(elem,'no active')
//     }
// })
// -----------------------------------
// elem.classList.toggle('test')  // добавляет если нет, убирает если есть
// --------------------

// var elem = document.querySelector('.list-link');   // Стили
// elem.style.color = 'black'
// elem.style.marginTop = 10 + 'px'
// elem.style.cssText = 'margin-left: 50px; color:red;'

// var style = getComputedStyle(elem,"::before")// получить стили элемента, так же способ обратиться к псевдоэлементк
// console.log(style.fontSize) // получить определенное свойство (parseInt - если нужно только число)
// --------------------------------------------
// var elem = document.querySelector('.list-link');
// var input = document.querySelector('input');
// var link = elem.href //олучение ссылки элемента
// var value = input.value получение значения input
// console.log(link)
// console.log(value)
// --------------------------------------------

// var input = document.querySelector('input');
// // var check = input.hasAttribute('data-toggle') //проверка на наличие атрибута
// // var attr = input.getAttribute('data-toggle')  // получить имеющийся атрибут
// // input.setAttribute('data-toggle','test')  // заменить значение атрибута либо добавить новый
// // input.removeAttribute('data-toggle')  // удалить атрибут
// var data = input.dataset
// // console.log(check)
// // console.log(attr)
// // console.log(input)
// console.log(data)
