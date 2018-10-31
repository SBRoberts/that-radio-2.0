import { ACTIVE_GIF } from './types';

export const fetchActiveGif = (link) => dispatch => {
  dispatch({
    type: ACTIVE_GIF,
    payload: {
      item: link
    }
  })
}