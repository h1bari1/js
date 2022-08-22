const random = (min, max) => Math.floor(min + Math.random() * (max + 1 - min))
const aiImg = document.querySelector('.ai-choice-main img')
const userImg = document.querySelector('.user-choice-main img')
const userChoiceItem = document.querySelectorAll('.choice-item')
let interval = null
const opt = {
    turnsAi : [],
    turnsUser : [],
    interval : 20,
    userScore : 0,
    aiScore : 0,
}

const generateAi = () => {
    let rand = random(1,3)
    aiImg.setAttribute('src',`./img/${rand}.png`)
}
interval = setInterval(generateAi,opt.interval)

userChoiceItem.forEach(elem =>{
    elem.addEventListener('click',() => {
        clearInterval(interval)
        let userChoice = elem.firstElementChild.getAttribute('src')
        userImg.setAttribute('src',userChoice)
        let userNum = parseInt(userChoice.match(/\d/))
        let aiNum = parseInt(aiImg.getAttribute('src').match(/\d/))
        console.log(userNum)
        console.log(aiNum)

        ui()
        opt.turnsUser.push(userNum)
        opt.turnsAi.push(aiNum)
        checkWinner(...opt.turnsUser,...opt.turnsAi)
    })
})
const userButtons = (value) =>{
    userChoiceItem.forEach(elem => {
        elem.style.display = value
    })
}
const ui = () => {
    userButtons('none')
    const userChoiceWrap = document.querySelector('.choice-wrap')
    const nextRoundButton = document.createElement('button')
    nextRoundButton.classList.add('next-round-btn')
    nextRoundButton.innerHTML = 'Next round'
    userChoiceWrap.append(nextRoundButton)
}
const checkWinner = (user,ai) => {
    let userScore = document.querySelector('.user-score')
    let aiScore = document.querySelector('.ai-score')
    let winner = document.querySelector('.winner')
    let nextButton = document.querySelector('.next-round-btn')
    if (user === ai){
        winner.innerHTML = 'It`s tie';
    }else {
        if (user === 1){
            if (ai === 2){
                opt.aiScore++
            }else{
                opt.userScore++
            }
        }else if (user === 2){
            if (ai === 3){
                opt.aiScore++
            }else{
                opt.userScore++
            }
        }else if (user === 3){
            if (ai === 1){
                opt.aiScore++
            }else{
                opt.userScore++
            }
        }
    }

    userScore.innerHTML = `User: ${opt.userScore}`
    aiScore.innerHTML = `Ai: ${opt.aiScore}`
    nextButton.addEventListener('click',(e) => {
        document.querySelector('.next-round-btn').remove()
        userButtons('block')
        document.querySelector('.user-choice-main img').src = '/img/q.png'
        interval = setInterval(generateAi,opt.interval)
        console.log(opt)

    })
}


