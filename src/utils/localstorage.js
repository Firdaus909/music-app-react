const storage = window.localStorage

export const getStorage = (key) => {
    return storage.getItem(key)
}

export const setStorage = (key, value) => {
    storage.setItem(key,value)
}

export const removeStorage = (key) => {
    storage.removeItem(key)
}

export const clearStorage = () => {
    storage.clear()
}
