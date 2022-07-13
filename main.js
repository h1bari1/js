var tank = document.querySelector('.tank')
var bullet = document.querySelector('.bullet')
var startPoint = bullet.getBoundingClientRect().x - 100
var stepN;
var step = 10

document.addEventListener('keydown', function (e){
    var leftT = parseInt(getComputedStyle(tank).left) || 0;
    var tTank = parseInt(getComputedStyle(tank).top) || 0;
    var lBullet = parseInt(getComputedStyle(bullet).left) || 0;
    if (e.code === 'KeyD'){
        tank.style.left = leftT + step + 'px'
        tank.style.transform = 'rotate(0deg)'
    } else if (e.code === 'KeyA'){
        tank.style.transform = 'rotate(180deg)'
        tank.style.left = leftT < 0 ? 0 + 'px' : leftT - step + 'px'
    }
    if (e.code === 'KeyW'){
        if (tTank <= 0){
            tTank = 0  + 'px'
        }
        tank.style.transform = 'rotate(-90deg)'
        tank.style.top = tTank - step + 'px'

    }
    if (e.code === 'KeyS'){
        tank.style.top = tTank + step + 'px'
        tank.style.transform = 'rotate(90deg)'
    }
    if(e.code === 'Space'){
        bullet.style.opacity = '1'
        var interval = setInterval(fire,10)
    }
    function fire(){
        stepN = lBullet += step
        bullet.style.left = stepN + 'px'
        if (stepN > window.innerWidth){
            clearInterval(interval)
            bullet.style.left = startPoint + 'px'
            bullet.style.opacity = '0'

        }
    }
})



