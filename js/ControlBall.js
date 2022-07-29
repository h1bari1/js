class ControlBall{
    constructor(score,life) {
        this.size = 100
        this.speed = 5;
        this.interval = 50;
        this.score = score;
        this.life = life;
    }
    init(){
        this.generateBall();
        this.move();
    }
    generateBall(){
        this.ball = new Ball(this.size, this.generateX() );
        console.log(this.generateX())
        this.ball.addEventListener('click',() => {
            this.destroy();
            this.score.updateScore()

        })
    }
    generateX(){
        return  Math.ceil(Math.random() * (window.innerWidth - this.size)) ;
    }
    destroy(){
        if(this.ball) {
            this.ball.remove()
            this.ball = null
        }
    }
    move(){
        let y = 0;
        this.moveInterval = setInterval(() => {
             y += this.speed
            if(this.ball) {
                this.ball.style.top = `${y}px`
            }else {
                y = 0
            }
            if(y > window.innerHeight - this.size ){
                clearInterval(this.moveInterval)
                this.destroy()
                this.life.updateLife()
            }

        }, this.interval)
    }

}
