import React from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useTrackContext } from '../context/Tracks'

import './css/ModalButton.css'

function ModalButton() {
  const { selectedTracks } = useTrackContext()
  const len = selectedTracks.length

  const style = {
    display: len > 0 ? 'block' : 'none'
  }

  return (
    <div className="modal-button" style={style}>
      <span className="modal-notif">{len}</span>
      <AiFillPlusCircle className="modal-icon" />
    </div>
  )
}

export default ModalButton