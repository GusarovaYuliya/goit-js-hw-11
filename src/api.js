export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '39546203-6f24950b6bb132fcbecdbd78e';
export const options = {
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page: 1,
    q: '',
  },
};