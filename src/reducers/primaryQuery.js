import { PRIMARY_QUERY } from '../actions/types';

const initialState = {
  queryTerm: '',
}
export default function (state = initialState, action) {

  switch (action.type) {
    case PRIMARY_QUERY:
      return {
        ...state,
        queryTerm: action.payload
      }
    default:
      return state;

  }
}