import { useState, useContext, createContext } from "react";

const PlaylistContext = createContext({})

export const PlaylistProvider = ({children}) => {
    const [playlist,setPlaylist] = useState([])

    return (
        <PlaylistContext.Provider value={{playlist, setPlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export const usePlaylistContext = () => {
    const context = useContext(PlaylistContext)
    return context
}