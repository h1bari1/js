const createTag = (tag, append = document.body, text = '',src = '', className = '', style = null) => {
    let tagName = document.createElement(tag)
    if (className){
        tagName.classList.add(className)
    }
    if(tag === 'img'){
        tagName.src = src
    } else {
        tagName.innerHTML = text
    }
    // if(style){
    //     // continue!!!!!!!!!!
    // }
    append.append(tagName)
}
const createItem = (name, src, callback) => {
    let wrap = document.querySelector('.items-wrap')
    let item = document.createElement('div')
    item.classList.add('item')
    let img = document.createElement('img')
    img.src = src || './images/logo.png'
    let text = document.createElement('p')
    text.innerHTML = name
    let moreBtn = document.createElement('button')
    moreBtn.innerHTML = "More"
    moreBtn.addEventListener('click', callback)
    wrap.append(item)
    item.append(img)
    item.append(text)
    item.append(moreBtn)
}
const addActivePagination = (_this) => {
    let paginations = document.querySelectorAll('.pagination-wrap button')
    paginations.forEach(elem => {
        elem.style.background = 'lightgrey'
    })
    _this.style.background = 'red'
}
const createPagination = (count,callback) => {
    let paginationWrap = document.querySelector('.pagination-wrap')
    paginationWrap.innerHTML = ""
    for (let i = 1; i <= count; i++) {
        let paginationBtn = document.createElement('button')
        if(i === 1) {
            paginationBtn.style.background = 'red'
        }
        paginationBtn.innerHTML = i
        paginationBtn.addEventListener('click', () => {
            callback(i)
            addActivePagination(paginationBtn)
        })
        paginationWrap.append(paginationBtn)
    }
}
const createList = (items, callback, resource = 'type') => {
    let listWrap = document.querySelector(`.list-wrap-${resource}`)
    let list = document.createElement('select')
    items.unshift(defaultType)
    items.forEach(elem => {
        let {name, url} = elem
        let id = url.split('/').slice(-2,-1).join('')
        let option = document.createElement('option')
        option.innerHTML = name
        option.value = id
        list.append(option)
    })
    list.addEventListener('change', (e) => {
        callback(e.target.value)
    })
    listWrap.append(list)
}
const setSize = (size = 0, param = '', d = 10) => {
    return `${(Number(size) / d).toLocaleString('en-IN', { minimumSignificantDigits: 2 })}${param}`
}
const createInfo = ({height,weight,stats,types,name,sprites,id}) => {
    let infoBlock = document.querySelector('.pokemon-info')
    createTag('img',infoBlock,null , sprites.front_default,'main-img-info')
    createTag('p',infoBlock,`name: ${name}`)
    createTag('p',infoBlock,`height: ${setSize(height, 'm')}`)
    createTag('p',infoBlock,`weight: ${setSize(weight, 'kg')}`)
    stats.forEach(elem =>
        createTag('p',infoBlock,`${elem?.stat?.name || '???'} : ${elem?.base_stat  || '???'}`))
    types.forEach(elem => createTag('p',infoBlock,`${elem.type.name}`))
    createTag('button',infoBlock,'Normal' , '','normal-img-btn')
    createTag('button',infoBlock,'Shiny' ,'','shiny-img-btn')
    let mainImg = document.querySelector('.main-img-info')
    let normalImg = document.querySelector('.normal-img-btn')
    let shinyImg = document.querySelector('.shiny-img-btn')
    normalImg.addEventListener('click', () => {
        mainImg.src = sprites.front_default
    })
    shinyImg.addEventListener('click', () => {
        mainImg.src = sprites.front_shiny
    })
    api(`${url}pokemon-form/${id}`, (res) => {
        console.log(res)
    })
}
