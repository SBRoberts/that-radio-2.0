import {  DISPLAY_GIF_PANEL } from '../actions/types';
import {  DISPLAY_CONTROL_PANEL } from '../actions/types';

const initialState = {
  displayGifPanel: false,
  displayControlPanel: false
}
export default function (state = initialState, action) {

  switch (action.type) {
    case DISPLAY_GIF_PANEL:
      return {
        ...state,
        displayGifPanel: action.payload,
      }
    case DISPLAY_CONTROL_PANEL:
      return {
        ...state,
        displayControlPanel: action.payload,
      }
    default:
      return state;
  }
}