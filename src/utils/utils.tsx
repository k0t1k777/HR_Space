export const BASE_URL = 'http://localhost:8000'
export const TOKEN = 'bd728ac88514039c8c5e7cde0a062a744445b19a';

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
  return fetch(`${BASE_URL}/api/v1/spaces/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(content),
  }).then(getResponseData);
};

// // 1 Экран
// specialization
// towns
// Min-salary, маx-salary
// // 3 Экран
// expiriense (здесь есть Delete запрос, если останется время можно попробовать и его реализовать)
// education
// skills
// // 4 Экран
// languages {[],[],[]}
// // 5 Экран
// decoration
// occupation
// timetable
// // 6 Экран
// mission
// bonus
// // 7 Экран
// expectations
// // 8 Экран
// countCandidates
// date
// countRecruiter
// // 9 Экран
// payments
// award
