import userEvent from '@testing-library/user-event';
import Searchbar from '../Pages/CreatePlaylist/Searchbar';
import { render, screen } from './utils';

test('All component render properly', () => {
  render(<Searchbar />);
  const inputSearch = screen.getByRole('textbox');
  const buttonSearch = screen.getByRole('button', { name: /search/i });

  expect(inputSearch).toBeInTheDocument();
  expect(buttonSearch).toBeInTheDocument();
});

test('User can typing in input search', async () => {
  render(<Searchbar />);
  const inputSearch = screen.getByRole('textbox');

  await userEvent.type(inputSearch, 'Ed Sheeran', { delay: 1 });
  expect(inputSearch).toHaveValue('Ed Sheeran');
});
