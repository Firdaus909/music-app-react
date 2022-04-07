import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { tracksAction } from '../store/tracks-slice'

function TrackCard({ track }) {
    const { album, name, artists, uri } = track
    const selectedTracks = useSelector((state) => state.tracks.selectedTracks)
    const dispatch = useDispatch()

    const handleSelect = () => {
        const selected = selectedTracks.find((turi) => turi === uri)
        let newSelected
        if (!selected) {
            newSelected = [...selectedTracks, uri]
        }
        else {
            newSelected = selectedTracks.filter((turi) => turi !== uri)
        }
        dispatch(tracksAction.setSelectedTracks(newSelected))
    }

    const isSelected = selectedTracks.find((turi) => turi === uri)

    return (
        <Col>
            <Card className='text-center'>
                <Card.Img variant="top" src={album.images[0].url} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {artists[0].name} - {album.name}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={handleSelect} className="w-100">{isSelected ? "Deselect" : "Select"}</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

export default TrackCard