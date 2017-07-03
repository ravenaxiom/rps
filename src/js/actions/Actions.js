import {ACTIONS} from '../constants/Constants';

export function resetGame (humanPlaying) {
  return {
    type: ACTIONS.RESET_GAME,
    humanPlaying
  };
}

export function setMove (move) {
  return {
    type: ACTIONS.SET_MOVE,
    move
  };
}
