import { FETCH_STATIONLIST } from './types';
import axios from 'axios';

export const fetchStationList = (queryTerm) => dispatch =>{
  
  const getStations = () => {
    const apiKey = 'AIzaSyBwCL-n9i1xIFVtVYbHvzNHjtG3QQLWnMA'
    const baseUrl = 'https://www.googleapis.com/youtube/v3/'
    axios({
      method: 'GET',
      url: `${baseUrl}search?part=snippet`,
      dataResponse: 'json',
      params: {
        q: queryTerm,
        type: 'video',
        eventType: 'live',
        videoCategoryId: '10',
        videoEmbeddable: 'true',
        maxResults: '5',
        key: apiKey,
      }
    })
    .then(({ data }) => {
      const stationList = data.items || 'undefined'
      dispatch({
        type: FETCH_STATIONLIST,
        payload: stationList
      })
      return stationList
    })
  }
  getStations()
}