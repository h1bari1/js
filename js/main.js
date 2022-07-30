let slidesList = ['https://picsum.photos/500/500',
    'https://picsum.photos/600/600',
    'https://picsum.photos/700/700']
const  btn = document.querySelectorAll('.slider-btn')
const mover = document.querySelector('.slider-wrap ul')
const slides = mover.querySelectorAll('li')
let count = 0
const createSlides = () => {
    slidesList.forEach(elem => {

    })

}

slides[count].classList.add('active')

const onMove = () =>{
    const active = mover.querySelector('.active')
    const next = active.nextElementSibling
    if(next){
        let {width} = getComputedStyle(next)
    }
}

btn.forEach(elem => {
    if (elem.classList.contains('slider__next')){
        elem.addEventListener('click',onMove)
    }else {

    }
})




