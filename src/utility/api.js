import axios from "axios";
import { getStorage } from "./storage";

const BASE_URL = "https://api.spotify.com/v1"

const createResource = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            'content-type': 'application/json',
            Accept: 'application/json'
        }
    })

    instance.interceptors.request.use(
        (config) => {
            const token = getStorage("token")

            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }

            return config
        },
        (err) => Promise.reject(err)
    )

    return instance
}

export const trackSearch = (keyword) => {
    const params = {
        q: keyword,
        limit: '10',
        type: 'track'
    }
    return createResource().get('/search', { params })
}

export const getProfile = () => {
    return createResource().get('/me')
}

export const postPlaylist = async (userID, playlistData) => {
    const data = {
        name: playlistData.title,
        description: playlistData.description,
        collaborative: false,
        public: false
    }

    return createResource().post(`/users/${userID}/playlists`, data)
}

export const addItems = (playlistID, uris) => {
    return createResource().post(`/playlists/${playlistID}/tracks`, uris)
}

export const getUserPlaylist = () => {
    return createResource().get('/me/playlists')
}