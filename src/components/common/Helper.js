const localStorageUpdate = function () {
    Storage.prototype.setObject = function (key, value) {
        if(typeof value !== 'string') {
            this.setItem(key, JSON.stringify(value));
        } else {
            this.setItem(key, value);
        }
        
    };

    Storage.prototype.getObject = function (key) {
        const value = this.getItem(key);
        return value && JSON.parse(value);
    };
};
  
export function storeLocalData(key, object) {
if (!window.localStorage) {
    return;
}
localStorageUpdate();
localStorage.setObject(key, object);
}

export function getLocalData(key) {
if (!window.localStorage) {
    return false;
}
localStorageUpdate();
return localStorage.getObject(key);
}
  