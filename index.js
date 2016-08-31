module.exports = function(items, hasher){
    var resultHash = {},
        results = [];

    items.forEach(function(item){
        if(!(hasher(item) in resultHash)){
            resultHash[hasher(item)] = true;
            results.push(item);
        }
    });

    return results;
};