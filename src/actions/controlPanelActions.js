import { DISPLAY_GIF_PANEL } from './types';
import { DISPLAY_CONTROL_PANEL } from './types';

export const displayGifPanel = (bool) => dispatch => {
  dispatch({
    type: DISPLAY_GIF_PANEL,
    payload: bool
  })
}
export const displayControlPanel = (bool) => dispatch => {
  dispatch({
    type: DISPLAY_CONTROL_PANEL,
    payload: bool
  })
}