export const generateRandomKey = (length) => {
  let result = '';
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLength = char.length;

  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

export const getParamValues = (url) => {
  const newUrl = url
    .slice(1)
    .split('&')
    .reduce((prev, curr) => {
      const [title, value] = curr.split('=');
      return {
        ...prev,
        [title]: value,
      };
    }, {});
  // const parsed = url.split('&')[0].split('=');
  // return parsed[parsed.length - 1] ?? null;
  return newUrl;
};
