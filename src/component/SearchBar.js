import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { tracksAction } from '../store/tracks-slice'
import { trackSearch } from '../utils/api'

function SearchBar({setIsSearched}) {
    const [validated, setValidated] = useState(false)
    const [keyword, setKeyword] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        if(keyword){
            const { data } = await trackSearch(keyword)
            dispatch(tracksAction.setTracks(data.tracks.items))
            setIsSearched(true)
        }
        setValidated(true);
    }

    return (
        <Form className="text-center w-50 m-auto" noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label className="text-white fs-4">Search for Tracks</Form.Label>
                <Form.Control required type="text" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                <Form.Control.Feedback type="invalid" className="fs-6">Please Type Something</Form.Control.Feedback>
            </Form.Group>
            <Button className="mt-2" type="submit">Search</Button>
        </Form>
    )
}

export default SearchBar