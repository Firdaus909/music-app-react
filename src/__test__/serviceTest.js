export const getUser = (accessToken) => {
  return fetch('https://api.spotify.com/v1/me', {
    headers: {
      Authorization: 'Bearer ' + accessToken,
    },
  }).then((res) => res.json());
};
