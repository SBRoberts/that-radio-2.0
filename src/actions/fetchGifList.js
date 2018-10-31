import { FETCH_GIFLIST } from './types';
import axios from 'axios';

export const fetchGifList = (queryTerm) => dispatch => {

  const getGifs = () => {
    const apiKey = 'Tlym1KyBQVNQeCjPaSWWPrsAaEwp04Pj'
    const baseUrl = 'https://api.giphy.com/v1/gifs/search'
    axios({
      method: 'GET',
      url: baseUrl,
      dataResponse: 'json',
      params: {
        q: queryTerm,
        api_key: apiKey,
        rating: 'pg-13',
      }
    })
    .then(({data}) => {
      const gifList = data.data
      dispatch({
        type: FETCH_GIFLIST,
        payload: gifList
      })
      return gifList
    })
  }
  getGifs()
}