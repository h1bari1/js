// let xhr = new XMLHttpRequest();
// const status = {
//     '200': true,
//     '203': true,
// }
// const pagination = {
//     limit: 20,
//     offset: 20,
//     page: 1
// }
// let users = []
// let url = 'https://pokeapi.co/api/v2/'
// // xhr.open('GET', `${url}pokemon`)
// // --------------------Post-----------------
// // xhr.open('POST', `${url}pokemon/`)
// // let user = {
// //     name: 'Roman',
// //     id: 0
// // }
// // let formData = new formData(user);
// // // formData.append('name','Roman')
// // xhr.setResponseHeader('X-Auth','Bearer qwerty')
// // xhr.getResponseHeader('Content-Type','application/json; ')
// // xhr.send(JSON.stringify(formData))
// // --------------------Post-----------------
// // xhr.send()
// const wrap = document.querySelector('.wrap-btn')
// const info = document.querySelector('.info')
// const link = document.querySelectorAll('.pagination')
// const createElem = (tag, append, src = null, text = null, api = null) => {
//     let elem = document.createElement(tag)
//     append.append(elem)
//     if (src) {
//         elem.src = src
//         elem.alt = text
//         elem.title = text
//     }
//     if (!src && text) {
//         elem.innerHTML = text
//     }
//     if (api) {
//         elem.addEventListener('click', () => {
//             fetch(api)
//                 .then(res => res.json())
//                 .then(res => {
//                     console.log(res)
//                     const {sprites = {}, species = {}} = res
//                     const {front_default = {}} = sprites
//                     const {name = {}} = species
//                     info.innerHTML = ''
//                     createElem('h3', info, null, name)
//                     createElem('img', info, front_default, name)
//                 })
//         })
//     }
//
// }
// // xhr.onload = function (){
// //     if (status[xhr.status]){
// //         let data = JSON.parse(xhr.response)
// //         let { results } = data
// //         users = results
// //         results.forEach(elem => {
// //             createElem('p',document.body,null,elem.name)
// //         })
// //         console.log(results)
// //     }else{
// //         console.log('error',xhr.status)
// //     }
// // }
// // setTimeout(() => {
// //     console.log(users)
// // },2000)
// const apiRequest = () => {
//     let customLink = `?limit=${pagination.limit}&offset=${pagination.offset * pagination.page}`
//     fetch(`${url}pokemon${customLink}`)
//         // .then( async res => {
//         //     const {results} = await res.json()
//         //     results.forEach(elem =>{
//         //         createElem('p', document.body, null, elem.name)
//         //     })
//         //     console.log(results)
//         // })
//         .then(res => res.json())
//         .then(res => {
//             const {results} = res
//             results.forEach(elem => {
//                 createElem('button', wrap, null, elem.name, elem.url)
//             })
//             console.log(res)
//         })
// }
// link.forEach(elem =>{
//     elem.addEventListener('click', function (e){
//         e.preventDefault();
//         wrap.innerHTML = ''
//         pagination.page = elem.getAttribute('data-id')
//         apiRequest()
//     })
// })
// apiRequest()

