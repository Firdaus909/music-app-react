import { rest } from 'msw';

import profileResponse from './response/profile';

export const handlers = [
  // rest.get('https://api.spotify.com/v1/me', (req, res, ctx) => {
  //   console.debug('[MSW]: mock https://api.spotify.com/v1/me');
  //   return res(
  //     ctx.json({
  //       user: {
  //         images: [
  //           {
  //             url: 'Testing Image',
  //           },
  //         ],
  //         display_name: 'Psycho_Lynx',
  //         country: 'ID',
  //         followers: {
  //           total: 2000,
  //         },
  //         external_urls: {
  //           spotify: 'No Url Here',
  //         },
  //       },
  //     })
  //   );
  // }),
  rest.get('/test', (req, res, ctx) => {
    console.log('this line is running');
    return res(ctx.json({ msg: 'success' }));
  }),
];
