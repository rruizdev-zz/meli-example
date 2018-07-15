const request = require('request');

exports.getJsonFromUrl = myUrl => {
    const myOptions = { url: myUrl, headers: { 'User-Agent': 'request' }};

    return new Promise((resolve, reject) => {
        request.get(myOptions, (error, response, body) => {
            if (error) reject(error);
            else resolve(JSON.parse(body));
        });
    });
}