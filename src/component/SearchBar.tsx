import React, {
  Dispatch,
  FC,
  FormEvent,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAppDispatch } from '../store/index';
import { trackAction } from '../store/tracks-slice';
import searchTracks from '../utils/searchTrackApi';

interface searchProps {
  setIsSearched: Dispatch<SetStateAction<boolean>>;
}

const SearchBar: FC<searchProps> = ({ setIsSearched }) => {
  const [validated, setValidated] = useState(false);
  const [keyword, setKeyword] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    if (keyword) {
      const searchParams = {
        q: keyword,
        limit: '10',
        type: 'track',
        market: 'ID',
      };
      setIsLoading(true);
      const { data } = await searchTracks(searchParams);
      dispatch(trackAction.setTrack(data));
      setIsLoading(false);
      setIsSearched(true);
    }
    setValidated(true);
  };

  return (
    <Form
      className="text-center w-50 m-auto"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <Form.Group>
        <Form.Label className="text-white fs-4">Search for Tracks</Form.Label>
        <Form.Control
          required
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Form.Control.Feedback type="invalid" className="fs-6">
          Please Type Something
        </Form.Control.Feedback>
      </Form.Group>
      <Button className="mt-2" type="submit" disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </Form>
  );
};

export default SearchBar;
