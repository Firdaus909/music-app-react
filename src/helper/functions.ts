export const generateRandomKey = (length: number) => {
  let result = '';
  const char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charLength = char.length;

  for (let i = 0; i < length; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }

  return result;
};

export const getParamValues = (url: string) => {
  const newUrl = url
    .substring(1)
    .split('&')
    .reduce((initial: { [key: string]: any }, item) => {
      const init = initial;
      if (item) {
        const parts = item.split('=');
        init[parts[0]] = decodeURIComponent(parts[1]);
      }
      return init;
    }, {});
  return newUrl;
};

export const msToMinutesSecond = (ms: number) => {
  const minutes = Math.floor(ms / 60000);
  const seconds = (ms % 60000) / 1000;

  return `${minutes}:${seconds <= 9 ? '0' : ''}${seconds.toFixed(0)}`;
};

export const stringToDate = (str: string) => {
  const [year, month, day] = str.split('-').map(Number);

  const date = new Date(+year, month - 1, +day).toLocaleString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return date;
};
