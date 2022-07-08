var wrap = document.querySelector(".wrap")
var bg = document.querySelector(".background")
var settings = {
    'xPath':'./images/X.png',
    'oPath':'./images/O.png',
    'countSquares' : 9,
    'flag': false,
    'winComb': [[1,2,3],[1,5,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]],
    'store' : [],
    'winX' : [],
    'winO' : [],
    'once' : true
}
function createElement(tag,classElem,append){
    var element = document.createElement(tag)
    element.classList.add(classElem)
    append.append(element)
}
function startGame(){
    for(var i = 0; i < settings.countSquares; i++){
        createElement('div','square',wrap)
    }
    createElement('span','turn-text',bg)
    createElement('span','win-text',bg)
    createElement('button','restart-button',bg)
}
startGame()


function winner() {
    var winText = document.querySelector('.win-text')
    var x = settings.winX
    var o = settings.winO
    if (settings.countSquares === 0) {
        console.log(winText)
        winText.innerHTML = 'It`s Tie'
    }
    for (var i = 0; i < settings.winComb.length; i++) {
        var win = settings.winComb[i]

        if (x.includes(win[0]) && x.includes(win[1]) && x.includes(win[2])){
            winText.innerHTML = 'Win X'
        } else if (o.includes(win[0]) && o.includes(win[1]) && o.includes(win[2])){
            winText.innerHTML = 'Win O'
        }
    }
}

function playerTurn(player,flagP,img){
    img.setAttribute('src',player)
    settings.flag = flagP
}


// var turn = document.querySelector('.turn-text').innerHTML = 'X - turn'
var square = document.querySelectorAll('.square')
square.forEach(function (elem,index){
    elem.addEventListener('click',function (e){
        var check = elem.classList.contains('square')
        var img = document.createElement('img')
        if(check){
            settings.store[index] = settings.flag
            if(!settings.flag){
                playerTurn(settings.xPath,true,img)
                settings.winX.push(index + 1)
                // turn.innerHTML = 'O - turn'
            }
            else{
                playerTurn(settings.oPath,false,img)
                settings.winO.push(index + 1)
                // turn.innerHTML = 'X - turn'

            }
            elem.append(img)
            settings.countSquares -= 1
            winner()
        }
    },{'once': settings.once})
})
var restart = document.querySelector('.restart-button')
restart.innerHTML = 'Restart'
restart.addEventListener('click',function (e){
    window.location.reload()
})


