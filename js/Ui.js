class Ui{
    constructor() {

    }
    createField(text,value,classText){
        let span = document.createElement('span')
        span.className = `ui-text ${classText}`
        span.innerHTML = `${text} ${value}`
        return span
    }
    renderUi(){
        let wrap = document.createElement('div')
        wrap.className = 'ui-wrap'
        document.body.append(wrap)
        let uiWrap = document.querySelector('.ui-wrap')
        uiWrap.append(this.createField('Score:',0,'score'))
        uiWrap.append(this.createField('Life:',3,'life'))
    }
    newGame(){
        let button = document.createElement('button')
        button.innerHTML = 'New Game'
        document.body.append(button)
        button.addEventListener('click',() =>{
            button.style.display = 'none'
            let score = document.querySelector('p')
            if(score) score.remove()
            new Game().start()
        })
    }

}
