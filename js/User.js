class User{
    constructor(login, password) {
        this.login = login;
        this.password = password;
    }
    checkPass(){
        return this.password.length > 10
    }
}
// const test = new User('testlog','pass1fsdfsd234')
// const test2 = new User('test2','dsfsgsdfgf')
// const test3 = new User('test3','sgsdfgf')
// const users = [test,test2,test3]
//
// users.forEach((elem) => {
//     let {login} = elem
//     let check = elem.checkPass() ? 'прошел' : "не прошел"
//     console.log(`${login} - ${check}`)
// })
