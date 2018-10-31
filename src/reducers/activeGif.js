import { ACTIVE_GIF } from '../actions/types';

const initialState = {
  item: "",
}
export default function (state = initialState, action) {

  switch (action.type) {
    case ACTIVE_GIF:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}