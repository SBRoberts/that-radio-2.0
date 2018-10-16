import { FETCH_GIFLIST } from '../actions/types';

const initialState = {
  gifList: [],
}
export default function (state = initialState, action) {

  switch (action.type) {
    case FETCH_GIFLIST:
      return {
        ...state,
        gifList: action.payload
      }
    default:
      return state;

  }
}