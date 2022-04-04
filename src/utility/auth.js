import { generateRandomKey } from "./helper";
import { clearStorage, setStorage } from "./storage";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_SPOTIFY_REDIRECT_URI
const SCOPE = 'playlist-modify-private playlist-read-private'

export const login = () => {
    const STATE = generateRandomKey(16)
    setStorage("state", STATE)
    window.location.replace(`https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}&state=${STATE}`)
}

export const logout = () => {
    clearStorage()
    window.location.reload(true)
}
