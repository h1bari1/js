let slidesList = ['https://picsum.photos/500/500',
    'https://picsum.photos/600/600',
    'https://picsum.photos/700/700']
// let  slidesList = ['1.png',"2.jpg",'3.png','4.jpg'];
const  btn = document.querySelectorAll('.slider-btn');
const mover = document.querySelector('.slider-wrap ul');
const dots = document.querySelector('.slider-dots');
console.log(mover)
let count = 0;



const createSlides = () => {
    slidesList.forEach((elem,index) => {
        const slide = document.createElement('li')
        mover.append(slide)
        slide.innerHTML = `<img src="${elem}" alt='${elem}'>`
        const dot = document.createElement('span')
        dot.classList.add('dot')
        dots.append(dot)
    })
}
createSlides()

const currentDot = dots.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slider-wrap ul li');
slides[count].classList.add('active')
currentDot[count].classList.add('active')

const onMove = () =>{
    const active = mover.querySelector('.active')
    const activeDot = dots.querySelector('.active')
    const next = active.nextElementSibling
    const dotNext = activeDot.nextElementSibling
    if(next){
        let {width} = getComputedStyle(next)
        mover.style.transform += `translate(-${width})`
        active.classList.remove('active')
        next.classList.add('active')
        activeDot.classList.remove('active')
        dotNext.classList.add('active')
    }
}
const onBack = () => {
    const active = mover.querySelector('.active')
    const activeDot = dots.querySelector('.active')
    const prev = active.previousSibling
    const dotPrev = activeDot.previousSibling
    mover.style.transform += `translate(-${width})`
    active.classList.remove('active')
    prev.classList.add('active')
    activeDot.classList.remove('active')
    dotPrev.classList.add('active')
}
btn.forEach(elem => {
    if (elem.classList.contains('slider__next')){
        elem.addEventListener('click',onMove)
    }else {
        elem.addEventListener('click',onBack)
    }
})




