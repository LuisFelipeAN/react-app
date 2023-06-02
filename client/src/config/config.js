import app from './app'
import clerk from './clerk'

const config = {
    app,
    clerk,
};

export default function(key, def = null){
    var current = config;
    const path = key.split('.');
    for (var i = 0; i < path.length; i++) {

        if (!current[path[i]]) return def;

        current = current[path[i]];
    }
    return current;
};