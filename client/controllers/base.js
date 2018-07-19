exports.getResponse = (promise) => {
    promise.then(response => { 
        return response;
    }, error => { 
        return undefined;
    });
}