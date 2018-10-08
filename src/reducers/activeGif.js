import { ACTIVE_GIF } from '../actions/types';

const initialState = {
  activeGif: {},
}
export default function (state = initialState, action) {

  switch (action.type) {
    case ACTIVE_GIF:
      return {
        ...state,
        activeGif: action.payload
      }
    default:
      return state;

  }
}