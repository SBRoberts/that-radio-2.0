import {FETCH_STATIONLIST } from '../actions/types';

const initialState = {
  stationList: [],
}
export default function(state = initialState, action){
  
  switch (action.type){
    case FETCH_STATIONLIST:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;

  }
}