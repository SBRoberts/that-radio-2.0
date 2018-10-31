import { ACTIVE_STATION } from '../actions/types';

const initialState = {
  item: '',
}
export default function (state = initialState, action) {

  switch (action.type) {
    case ACTIVE_STATION:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;

  }
}