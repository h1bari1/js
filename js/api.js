const api = (urlApi, callbackApi) => {
    fetch(`${urlApi}`)
        .then(res => res.json())
        .then(res => {
            callbackApi(res)
        })
}
const allApi = (res) => {
    const all = []
    res.forEach(elem => {
        all.push(fetch(`${elem?.pokemon?.url || elem?.url}`)
            .then(res => res.json()))
    })
    return Promise.all(all)
}
