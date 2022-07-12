// var btn = document.querySelector('.btn')

// btn.onclick = function (){
//     myConsole('Roma')
// }
// btn.onclick = myConsole
// function myConsole(name){
//     console.log('test1 ' + name)
// }

// btn.onclick = function (){
//     console.log('test1')
// }
// btn.onclick = function (){
//     console.log('test2')
// }

// btn.addEventListener('click',function (){
//     console.log('test1')
// })
// var opt = {
//     'capture': false,
//     'once': false,
//     'passive': false
// }
// btn.addEventListener('click',function (e){
// console.log('event', e.target) //target - получает элемент и\или то что внутри
// console.log('event', e.currentTarget) // - получает текущий элемент элемент
// console.log('event', e.which) /
// },opt)
//
// var wrap = document.querySelector('.wrap')
// var btn = document.querySelector('.btn')
// var span = document.querySelector('span')
// function myConsole(){
//     console.log('test1 ')
// }
// wrap.addEventListener('click',myConsole,{'once': true})
// -----------------------------
// wrap.addEventListener('click',function (e){
//     console.log('wrap --> lvl 1')
// },{'capture': true})
// btn.addEventListener('click',function (e){
//     console.log('btn --> lvl 2')
// })
// span.addEventListener('click',function (e){
//     console.log('span --> lvl 3')
//     // e.stopPropagation() // запрещает всплытие событий
// })

// var btn = document.querySelectorAll('.btn');
// function myConsole(i){
//     console.log('test1 -->', i)
// }
// console.log(btn)
// btn.forEach(function (elem,index){
//     elem.addEventListener('click',function (){
//         myConsole(index)
//     })
// })
// ------------------------
// function myConsole(){
//     console.log('test1 ')
// }
// var wrap = document.querySelector('.wrap');
// wrap.addEventListener('click',function (e){
//     // console.log(e.target.matches('.btn'))
//     var elem = e.target.closest('.btn')
//     if(elem) myConsole()
// })
// -------------------------
// var wrap = document.querySelector('.wrap')
// var block = document.querySelector('.block')
// function toggleBlock(elem){
//     elem.classList.toggle('active')
// }
// wrap.addEventListener('click',function (e){
//     var elem = e.target.closest('.btn')
//     if(elem) {
//         var block = document.querySelector('.block')
//         toggleBlock(block)
//     }
// })

// ---------------------------- hidden
// var wrap = document.querySelector('.wrap')
// var block = document.querySelector('.block')
// function toggleBlock(elem){
//     // elem.classList.toggle('active')
//     elem.hidden = !elem.hidden
//
// }
// wrap.addEventListener('click',function (e){
//     e.preventDefault()
//     var elem = e.target.closest('.btn')
//     var block = document.querySelector('.block')
//
//     if(elem) {
//         toggleBlock(block)
//     }else{
//         block.hidden = true
//     }
// })
// -----------------------------------
// function createButton(tag,clName,text){
//     var btn = document.createElement(tag)
//     btn.className = clName
//     btn.innerHTML = text
//     btn.setAttribute('data-id',text)
//     var wrap = document.querySelector('.wrap')
//     wrap.append(btn)
// }
// for(var i = 0;i<5;i++){
//     createButton('button','btn', i+1)
// }
// var wrap = document.querySelector('.wrap')
// wrap.addEventListener('click',function (e){
//     var elem = e.target;
//     var chek = e.target.matches('.btn');
//     if(chek){
//         console.log(elem.dataset.id)
//     }
// })
// var btn = document.querySelector('.btn')

// btn.addEventListener('mousedown',function (e){
//     console.log('mousedown', e)
// })
// btn.addEventListener('mouseup',function (e){
//     console.log('mouseup', e)
// })
// btn.addEventListener('click',function (e){
//     console.log('click', e)
// })
// btn.addEventListener('contextmenu',function (e){
//     console.log('contextmenu', e)
// })
// var block = document.querySelector('.block')
// block.addEventListener('mouseover',function (e){
//     console.log('mouseover', e.target)
//     console.log('relatedTarget', e.relatedTarget)                  // откуда навелся
//         var target = e.target.closest('span')
//         if(!target) return
//         target.style.cssText = 'background: pink;'
// })
// block.addEventListener('mouseout',function (e){
//     console.log('mouseout', e.target)
//     console.log('relatedTarget', e.relatedTarget)                // куда ушел
//         var target = e.target.closest('span')
//         if(!target) return
//         target.style.cssText = 'background: green;'
// })

// block.addEventListener('mouseenter',function (e){  // лучше mouseover не срабатывает всплытие и не срабатывает на внутренние элементы
//
//
// })
// block.addEventListener('mouseleave',function (e){
//
// })


// var block = document.querySelector('.block')
// var x = document.querySelector('.x')
// var y = document.querySelector('.y')
// var opt = {
//     move: false,
//     down: false,
//     up: false,
// }
// block.addEventListener('mousemove',function (e){
//     // x.innerHTML = e.clientX
//     // y.innerHTML = e.clientY
//     x.innerHTML = e.pageX
//     y.innerHTML = e.pageY
// })
// block.addEventListener('mousemove',function (e){
//     var target = e.target.closest('span')
//     if (target && opt.down){
//         target.style.left = e.clientX - (target.offsetWidth / 2) + 'px';
//         target.style.top = e.clientY - (target.offsetHeight / 2) + 'px';
//
//     }
// })
// block.addEventListener('mousedown', function (e) {
//     var target = e.target.closest('span')
//     if (target) {
//         opt.down = true
//         target.style.position = 'fixed'
//     }
//     console.log(target)
// })
// block.addEventListener('mouseup', function (e) {
//         opt.down = false
// })

// var block = document.querySelector('.block')
// console.log(block.getBoundingClientRect())      // Получение объекта свойств элемента
// console.log(window.innerWidth)   // ширина окна до скрола

//
// document.addEventListener('keydown',function (e){
//     console.log(e.code, ' - ' , e.key )
// })
// document.addEventListener('keyup',function (e){
//     console.log(e.code, ' - ' , e.key )
// })


// document.addEventListener('keydown',function (e){
//
//     // if(e.code === 'KeyW' && (e.shiftKey || e.metaKey)){
//     //     console.log('test')
//     // }
//     // if(e.code === 'Escape'){
//     //     document.querySelector('.block').hidden = true
//     // }
//     console.log(e.repeat)
// })

