const onClickMore = (id) => {
    let link = `${url}pokemon/${id}`
    api(link, (res) => {
        document.querySelector('.pokemon-info').innerHTML = ""
        createInfo(res)
    })
}
const getProfilePokemon = async (res) => {
    const pokemons = await allApi(res)
    pokemons.forEach(pokemon => {
        createItem(pokemon.name, pokemon.sprites.front_default, () => onClickMore(pokemon.id))
    })
}

const onClickPagination = (i) => {
    renderPokemons((i - 1) * pagination.limit)
}

const onClickType = (id = 0) => {
    if (Number(id)) {
        api(`${url}type/${id}`, (res) => {
            const {pokemon} = res
            console.log(pokemon)
            document.querySelector('.items-wrap').innerHTML = ""
            getProfilePokemon(pokemon)
        })
    } else {
        renderPokemons()
    }
}

const renderPokemons = (offset = pagination.offset) => {
    document.querySelector('.items-wrap').innerHTML = "loading...."
    let link = `${url}pokemon/?limit=${pagination.limit}&&offset=${offset}`
    api(link, (res) => {
        const {results} = res
        document.querySelector('.items-wrap').innerHTML = ""
        getProfilePokemon(results)
    })
}

const renderPagination = (offset = pagination.offset, resource = 'pokemon') => {
    api(`${url}${resource}/?limit=${pagination.limit}&&offset=${offset}`, (res) => {
        const {count} = res
        createPagination(count / pagination.limit, onClickPagination)
    })
}
const renderType = () => {
    api(`${url}type`, ({results}) => {
        createList(results, onClickType)
    })
}
const renderLocations = () => {
    api(`${url}location`, ({results}) => {
        createList(results, onClickType, 'zone')
    })
}

const initialRender = () => {
    renderLocations()
    renderType()
    renderPokemons()
    renderPagination()
}

initialRender()

