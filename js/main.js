// let users = [
//     // {
//     //     name: 'Val',
//     // },
//
// ]
// sessionStorage.setItem('user', JSON.stringify(users))


// let users = JSON.parse(sessionStorage.getItem('users'))
// if (!users) {
//     users = [{name: 'Pavel-0'}]
// } else {
//     users.push({name: `Pavel-${Date.now()}`})
// }
//
//
// let createNode = (name) => {
//     let btn = document.createElement('button')
//     btn.innerHTML = name
//     btn.addEventListener('click', (e) => {
//         let index = 0
//         users.forEach((elem,i) => {
//             if (elem.name === name) {
//                 index = i
//             }
//         })
//         users.splice(index,1)
//         sessionStorage.setItem('users', JSON.stringify(users))
//         myRender()
//     })
//     document.body.append(btn)
// }
// const myRender = () => {
//     document.body.innerHTML = ''
//     users.forEach((elem) => {
//         createNode(elem.name)
//     })
// }
// myRender()

//----------------------------------------Promise---------------------------------

let a = 10;
// setTimeout(() =>{
//     a = 100
//
// }, 2000)
// console.log(a)

let test = new Promise((resolve, reject) => {
    resolve( a + 100 )
})

test.then((res) => {
    return res * 10
}).then(res => console.log(res))

