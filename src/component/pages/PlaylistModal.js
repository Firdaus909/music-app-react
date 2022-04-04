import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { addItems, getUserPlaylist, postPlaylist } from '../../utility/api'
import { usePlaylistContext } from '../context/Playlist'
import { useTokenContext } from '../context/Token'
import { useTrackContext } from '../context/Tracks'

import './css/PlaylistModal.css'

function PlaylistModal({ show, onClose }) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const { selectedTracks, setSelectedTracks } = useTrackContext()
    const { user } = useTokenContext()
    const { setPlaylist } =usePlaylistContext()

    const resetPlaylistData = () => {
        setSelectedTracks([])
        setTitle('')
        setDesc('')
    }

    const submitPlaylist = async (e) => {
        e.preventDefault()
        if (!title) {
            setErrMsg("Please fill this out")
            return
        }

        if (title.length < 10) {
            setErrMsg("Must be min. 10 characters")
            return
        }

        const playlistData = {
            title: title,
            description: desc
        }
        const userID = user.id
        const { data: { id } } = await postPlaylist(userID, playlistData)
        await addItems(id, selectedTracks)

        const { data } = await getUserPlaylist()
        setPlaylist(data.items)

        resetPlaylistData()
        onClose()
    }

    if (!show) return null
    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>Create Playlist</h2>
                    <span className="modal-close-button" onClick={onClose}><AiOutlineClose /></span>
                </div>
                <form onSubmit={e => submitPlaylist(e)}>
                    <div className="modal-body">
                        <div className="input-group">
                            <label htmlFor="playlist-title">Playlist Title</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} type="text" name="title" id="playlist-title"></input>
                            <span className="playlist-title-error">{errMsg}</span>
                        </div>
                        <div className="input-group">
                            <label htmlFor="playlist-desc">Description</label>
                            <textarea value={desc} onChange={e => setDesc(e.target.value)} name="description" id="playlist-desc"></textarea>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="playlist-submit-button" type='submit'>Submit</button>
                        <button className="playlist-cancel-button" type='button' onClick={onClose}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PlaylistModal