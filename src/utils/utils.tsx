export const BASE_URL = 'http://51.250.27.201';
export const TOKEN = 'eb5412dde4a745df4b30b39ccff457978b1b5902';

const headers = {
  authorization: `Token ${TOKEN}`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getContent = () => {
  return fetch(`${BASE_URL}/api/v1/spaces/`, {
    method: 'GET',
    headers,
  }).then(getResponseData);
};

export const addNewContent = (content: object) => {
  return fetch(`${BASE_URL}/api/v1/app/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(content),
  }).then(getResponseData);
};
