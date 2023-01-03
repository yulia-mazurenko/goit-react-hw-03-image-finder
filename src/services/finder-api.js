import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '31162878-b0b34cee5ee846d8bb063e7fc';

const fetchPictures = async (searchSubject, pageCount) => {
  const searchParams = new URLSearchParams({
    q: searchSubject,
    page: pageCount,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  });

  const response = await axios.get(`/?${searchParams}`);
  return response.data;
};

export default fetchPictures;
