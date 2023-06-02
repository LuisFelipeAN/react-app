const config = {
    app: require('./app.js'),
    clerk: require('./clerk.js'),
};

module.exports = function(key, def = null){
    var current = config;
    const path = key.split('.');
    for (var i = 0; i < path.length; i++) {

        if (!current[path[i]]) return def;

        current = current[path[i]];
    }
    return current;
};