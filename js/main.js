//OOP
// const a = {
//     name: "Carl",
//     age: 30,
//     getTest: function (){
//         console.log('testing', this.test)
//     }
// }
// const b = {
//     working: true,
//     gender: 'male',
//     __proto__: a,
// }
// const c = {
//     test: true,
//     __proto__: b,
// }
//
// console.log('c => ', c)
//
// b.getTest()
//
// console.log(c.hasOwnProperty('test')) // возвращает наличие методов в объекте
// console.log(c?.test) // возвращает наличие методов в объекте

const user = {
    login: "Carl",
    password : 30,
    checkPassword: function (){
        // if(this.password.length > 10){
        //     return true
        // }
        // else{
        //     return false
        // }
        return this.password.length > 10
    }
}
user.password = 'dfsdfsde'


const profile = {
    name: "Pavel",
    age: 20,
    changePass: function (pass){
        this.password = pass
    },
    __proto__: user,
}
profile.changePass('qqqqqqqq')
console.log(user)
console.log(profile)
