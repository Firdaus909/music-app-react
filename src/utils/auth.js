import { generateRandomKey } from "./helper";
import { clearStorage } from "./localstorage";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URL
const SCOPE = 'playlist-modify-private playlist-read-private'
const STATE = generateRandomKey(16)

export const login = () => {
    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}&show_dialog=true`
}

export const logout = () => {
    clearStorage()
    window.location.replace("/")
}
