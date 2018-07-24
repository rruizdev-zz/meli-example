const config = {
    endpoint: {
        search: 'http://localhost:1810/api/items?q=%s',
        item: 'http://localhost:1810/api/items/%s'
    },
    title: {
        home: 'Mercado Libre Argentina',
        results: '%s en Mercado Libre Argentina'
    },
    description: {
        home: 'Todo lo que buscás al mejor precio en Mercado Libre. Envío Gratis. Tiendas Oficiales. Ofertas Exclusivas. Garantía. Cuotas sin Interes. Tipos: Televisores, Celulares, Deportes, Smartphones, Electrodomésticos, Moda, Computación.',
        results: 'Encontrá %s en Mercado Libre Argentina. Descubrí la mejor forma de comprar online.'
    },
    scripts: [
        "models/result.js",
        "models/detail.js",
        "controllers/detail.js",
        "controllers/results.js",
        "controllers/error.js",
        "controllers/main.js",
        "main.js"
    ]
}

module.exports = config;