import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
        'X-RapidAPI-Key': '809ce31d8dmshb6ec6253c0ea295p12c089jsna4d22f04c40c',
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
    },
  });
    
  return data;
}