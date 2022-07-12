// var ships = ['1 - a', '3 - a', '4 - a', '6 - b', '2 - c', '6 - c', '2 - d', '2 - e', '6 - f', '7 - f', '8 - f', '1 - h', '2 - h', '3 - h', '4 - h'];
// var field = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
// var wrap = document.querySelector('.wrap')
//
//
//
// function generateRow(letterField){
//     for (var i = 0; i < field.length; i++) {
//         var div = document.createElement('div')
//         var nameField = document.createElement('span')
//         var textMessage = document.createElement('div')
//         div.classList.add('square')
//         nameField.classList.add('name-field')
//         textMessage.classList.add('text-message')
//         nameField.innerHTML = (i + 1) +' - '+ letterField
//         wrap.append(div)
//         div.append(nameField)
//         div.setAttribute('data-id',(i + 1) +' - '+ letterField)
//     }
//
// }
// function generateField() {
//     field.forEach(function (elem,index){
//         generateRow(elem)
//     })
// }
// generateField()
//
// var square = document.querySelectorAll('.square')
// square.forEach(function (elem){
//     elem.addEventListener('click',function (e){
//         var check = elem.matches('.square')
//         var listCheck = ships.includes(elem.dataset.id)
//         if(check && listCheck){
//             elem.classList.add('damage')
//             elem.innerHTML = '💥'
//         } else {
//             elem.classList.add('miss')
//             elem.innerHTML = '❌'
//
//         }
//     })
// })
//
//
//
//
//
//
