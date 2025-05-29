import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search';

export const fetchFromAPI = async (query) => {
  const options = {
    params: {
      q: query, // The search term
      part: 'snippet',
      type: 'video',
      maxResults: '50'
    },
    headers: {
      'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY,
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  const { data } = await axios.get(BASE_URL, options);
  return data;
};
