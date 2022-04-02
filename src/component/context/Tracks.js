import { useState, useContext, createContext } from "react";

const TracksContext = createContext({})

export const TracksProvider = ({children}) => {
    const [tracks, setTracks] = useState([])
    const [selectedTracks, setSelectedTracks] = useState([])

    return (
        <TracksContext.Provider
            value={{
                tracks,
                setTracks,
                selectedTracks,
                setSelectedTracks
            }}
        >
            {children}
        </TracksContext.Provider>
    )
}

export const useTrackContext = () => {
    const context = useContext(TracksContext)
    return context
}