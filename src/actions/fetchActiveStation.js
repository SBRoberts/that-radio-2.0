import { ACTIVE_STATION  } from './types';

export const fetchActiveStation = (key) => dispatch => {
  dispatch({
    type: ACTIVE_STATION,
    payload: {
      activeStation: key,
    }
  })
}