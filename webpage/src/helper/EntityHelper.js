/**
 */

export function decodeUriValues(entity) {
    if (typeof(entity) === 'number') {
        return entity;
    } else if (typeof(entity) === 'string') {
        return decodeURI(entity);
    }
    if (entity === null || entity === undefined) {
        return entity;
    }
    for (var key in entity) {
        if (entity.hasOwnProperty(key)) {
            var v = entity[key];
            if (v === null || v === undefined) {
                continue;
            }
            if (v instanceof Array) {
                for (var i = 0; i < v.length; i++) {
                    v[i] = decodeUriValues(v[i]);
                }
            } else if (typeof(v) == 'object') {
                decodeUriValues(v);
            } else if (typeof(v) === 'string') {
                entity[key] = decodeUriValues(v);
            }
        }
    }
    return entity;
}

export function parseIntValues(entity) {
    if (typeof(entity) === 'number' || typeof(entity) === 'string') {
        return parseInt(entity);
    }
    if (entity === null || entity === undefined) {
        return entity;
    }
    for (var key in entity) {
        if (entity.hasOwnProperty(key)) {
            var v = entity[key];
            if (v === null || v === undefined) {
                continue;
            }
            if (v instanceof Array) {
                for (var i = 0; i < v.length; i++) {
                    v[i] = parseIntValues(v[i]);
                }
            } else if (typeof(v) == 'object') {
                parseIntValues(v);
            } else if (typeof(v) === 'string') {
                entity[key] = parseIntValues(v);
            }
        }
    }
    return entity;
}
var _flattenEntityHelper = function (entity, retDict, currentPath) {
    for (var key in entity) {
        if (entity.hasOwnProperty(key)) {
            var newPath = null;
            if (currentPath.length) {
                newPath = currentPath + '.' + key;
            } else {
                newPath = key;
            }

            var v = entity[key];
            if (v === null || v === undefined) {
                continue;
            }
            if (v instanceof Array) {
                retDict[newPath] = v;
            } else if (typeof(v) == 'object') {
                _flattenEntityHelper(v, retDict, newPath);
            } else {
                retDict[newPath] = v;
            }
        }
    }
};

export function flattenEntity(entity) {
    var retDict = {};
    _flattenEntityHelper(entity, retDict, '');
    return retDict;
}