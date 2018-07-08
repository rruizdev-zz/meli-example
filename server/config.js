const config = {
    name: 'Roberto',
    lastname: 'Ruiz',
    endpoints: {
        showItems: 'https://api.mercadolibre.com/sites/MLA/search?q=%s',
        showItem: 'https://api.mercadolibre.com/items/%s'
    },
    paths: {
        showDescription: '/description'
    }
}

module.exports = config;