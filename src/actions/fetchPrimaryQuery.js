import { PRIMARY_QUERY } from './types';

export const fetchPrimaryQuery = (queryTerm) => dispatch => {
  dispatch({
    type: PRIMARY_QUERY,
    payload: queryTerm
  })
}