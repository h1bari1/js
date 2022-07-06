var settings = {
    'xPath':'./images/X.png',
    'oPath':'./images/O.png',
    'countSquares' : 9,
    'flag': false,
}
var wrap = document.querySelector(".wrap")
var bg = document.querySelector(".background")
var winComb = [[1,2,3],[1,5,9],[1,4,7],[2,5,8],[3,6,9],[3,5,7],[4,5,6],[7,8,9]]
var playersTurn = new Array(settings.countSquares)
function generateField(){
    var createSquare = document.createElement('div')
    createSquare.classList.add('square')
    wrap.append(createSquare)
}
function createElement(tag,classElem){
    var element = document.createElement(tag)
    element.classList.add(classElem)
    bg.append(element)
}
function startGame(){
    for(var i = 0; i < settings.countSquares; i++){
        generateField()
    }
    createElement('span','turn-text')
    createElement('button','restart-button')
    createElement('span','win-text')
}
startGame()

function winnerCheck(){
    if (settings.countSquares === playersTurn.length){
        var winText = document.querySelector('.win-text')
        console.log(winText)
        winText.innerHTML = 'It`s Tie'
    }
    // for (var i = 0; i < playersTurn.length; i++) {
    //     for (var j = 0; j < winComb.length; j++) {
    //
    //     }
    // }
}
function playerTurn(player,flagP,img,index){
    img.setAttribute('src',player)
    settings.flag = flagP
    playersTurn.push('')
}
var square = document.querySelectorAll('.square')
square.forEach(function (elem,index){
    elem.addEventListener('click',function (e){
        var check = elem.classList.contains('square')
        var img = document.createElement('img')
        if(check){
            if(!settings.flag){
                playerTurn(settings.xPath,true,img,index)
            }
            else{
                playerTurn(settings.oPath,false,img,index)
            }
            console.log(playersTurn)
            elem.append(img)
            winnerCheck()
        }
    },{'once': true})

})

// console.log(playersTurn.push(index))
