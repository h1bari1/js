class Life{
    constructor() {
        this.life = 3
    }
    updateLife(){
        if(!this.life) return
        this.life--
        let lifeText = document.querySelector('.life')
        lifeText.innerHTML = `Life: ${this.life}`
    }
    end(){
            return this.life
    }
}

