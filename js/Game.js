class Game {
    constructor() {
        this.interval = 1000;
        this.life = new Life();
        this.score = new Score(); //тут прибавляется к счету один
        // this.ball = new Ball()
    }

    start() {
        new Ui().renderUi()
        this.balls = []
        this.intervalStart = setInterval(() => {
            this.balls.push(new ControlBall(this.score, this.life).init());
            this.gameOver()
        }, this.interval)
    }

    gameOver() {
        if (!this.life.end()){
            clearInterval(this.intervalStart)
            let allBall = document.querySelectorAll('.ball')
            allBall.forEach((elem) =>{
                elem.outerHTML = "";
                elem.remove()
                elem = null
            })
            this.balls = []
            document.body.innerHTML = `<p>  Your score:  ${this.score.updateScore() } </p>`
            new Ui().newGame()
        }
    }


}
