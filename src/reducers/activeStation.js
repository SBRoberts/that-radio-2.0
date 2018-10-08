import { ACTIVE_STATION } from '../actions/types';

const initialState = {
  activeStation: {},
}
export default function (state = initialState, action) {

  switch (action.type) {
    case ACTIVE_STATION:
      return {
        ...state,
        activeStation: action.payload
      }
    default:
      return state;

  }
}