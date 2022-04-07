export const generateRandomKey = (length) => {
    let result = ''
    const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charLength = char.length
    
    for(let i=0; i<length; i++){
        result += char.charAt(Math.floor(Math.random() * charLength))
    }

    return result
}

export const parseHash = (hash) => {
    let parsed = hash.split('&')[0].split('=')
    return parsed[parsed.length - 1] ?? null
}

