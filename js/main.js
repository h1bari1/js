let signInButton = document.querySelector('.sign-in')
const signIn = () =>{
    let userName = document.querySelector('input')
    return userName.value
}
const checkUser = () => {
    signInButton.addEventListener('click', (e) => {
        let user = signIn()
        let users = JSON.parse(sessionStorage.getItem(user))
        if(users || user){
            sessionStorage.setItem(user, JSON.stringify('2'))
            let popup = document.querySelector('.popup')
            popup.classList.add('disable')
        }else {
            let error = document.querySelector('.error')
            error.innerHTML = 'Invalid input. Please enter correct name'
        }
    })
}
checkUser()
