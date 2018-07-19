const request = require('request');

exports.getPromise = myUrl => {
    const options = { 
        url: myUrl, 
        headers: { 
            'User-Agent': 'request' 
        }
    };

    return new Promise((resolve, reject) => {
        request.get(options, (error, response, body) => {
            if (error) reject(error);
            else resolve(JSON.parse(body));
        });
    });
}