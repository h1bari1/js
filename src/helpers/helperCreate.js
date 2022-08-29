const helperCreateId = (tag, id) => {
    const elem = document.createElement(tag)
    elem.id = id
    return elem
}
const helperCreateClass = (tag, classes,text= '') => {
    const elem = document.createElement(tag)
    elem.classList.add(classes)
    elem.innerHTML = text;
    return elem
}
export {helperCreateId, helperCreateClass};
