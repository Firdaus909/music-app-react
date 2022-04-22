import 'whatwg-fetch';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { getUser } from './serviceTest';

const server = setupServer(
  rest.get('https://api.spotify.com/v1/me', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        display_name: 'Psycho_Lynx',
        images: {
          url: 'Testing Image',
        },
      })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test('Fetch name correctly', async () => {
  const test_token = 'testingtesting';
  const data = await getUser(test_token);
  const name = data.display_name;
  const image = data.images.url;

  expect(name).toBe('Psycho_Lynx');
  expect(image).toBeTruthy();
});
