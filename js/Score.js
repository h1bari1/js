class Score{
    constructor() {
        this.score = -1;
    }
    updateScore(){
        ++this.score
        let scoreText = document.querySelector('.score')
        scoreText.innerHTML = `Score: ${this.score + 1}`
        return this.score
    }
}
