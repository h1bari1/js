let xhr = new XMLHttpRequest();
const pagination = {
    limit: 20,
    offset: 20,
    page: 1
}
let url = 'https://pokeapi.co/api/v2/'

fetch(`${url}pokemon`)
    .then(res => res.json())
    .then(res => {
        const {results} = res

    })
