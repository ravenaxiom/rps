/**
 * Initial state generator
 */

import * as Constants from '../constants/Constants';

// build an array of players based on values set in Constants
export function BuildPlayers (isHumanPlaying) {
  let playerList = [];

  for (let i = 0; i < Constants.PLAYER_COUNT; i++) {
    playerList.push({
      type: Constants.TYPE_AI,
      wins: 0,
      move: Constants.NO_MOVE
    });
  }

  if (isHumanPlaying) {
    playerList[0].type = Constants.TYPE_HUMAN;
  }

  return playerList;
}

// initial state of the app on startup
export const InitialState = {
  humanPlaying: true,
  draws: 0,
  winningPlayer: Constants.NO_WINNER,
  players: BuildPlayers(true)
};
