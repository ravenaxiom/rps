/**
 * Main reducer for the game, handle all actions and return the correct state.
 * Handles game logic such as who wins a game, or setting up a new game.
 */

import * as Constants from '../constants/Constants';

// build an array of players based on values set in Constants
export function buildPlayers (isHumanPlaying) {
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
const initialState = {
  humanPlaying: true,
  draws: 0,
  winningPlayer: Constants.NO_WINNER,
  players: buildPlayers(true)
};

// randomly generate a move, used by AI
export function generateMove () {
  return Math.floor(Math.random() * Constants.MOVES.length);
}

// determine if a player has won this round
export function calculateResult (result) {
  let playerOne = result.players[0],
      playerTwo = result.players[1],
      playerOneMove = Constants.MOVES[playerOne.move].name,
      playerTwoMove = Constants.MOVES[playerTwo.move].name,
      playerOneBeats = Constants.MOVES[playerOne.move].beats,
      playerTwoBeats = Constants.MOVES[playerTwo.move].beats;

  if (playerOneMove === playerTwoMove) {
    result.draws++;
  } else if (playerOneBeats.indexOf(playerTwoMove) > -1) {
    playerOne.wins++;
  } else if (playerTwoBeats.indexOf(playerOneMove) > -1) {
    playerTwo.wins++;
  }

  return result;
}

// determine if a player has won the game
export function checkWinConditions (players) {
  let returnValue = Constants.NO_WINNER;

  // check if any players exceed the win condition limits
  for (let i = 0; i < players.length; i++) {
    if (players[i].wins >= Constants.NUM_WINS_NEEDED) {
      returnValue = i;

      break;
    }
  }

  return returnValue;
}

// main reducer
function GameReducer (state = initialState, action) {
  switch (action.type) {
    case Constants.ACTIONS.RESET_GAME: {
      return Object.assign({}, {
        humanPlaying: action.humanPlaying,
        draws: 0,
        winningPlayer: Constants.NO_WINNER,
        players: buildPlayers(action.humanPlaying)
      });
    }

    case Constants.ACTIONS.SET_MOVE: {
      let winningPlayer = Constants.NO_WINNER;
      let draws = state.draws;

      // clone the players array to ensure we don't mutate state directly
      let players = state.players.slice(0);

      // we assume player '0' is the human player, if playing
      if (state.humanPlaying) {
        players[0].move = action.move;
      } else {
        // otherwise, generate AI move for this player
        players[0].move = generateMove();
      }

      // generate AI move for remaining players
      for (let i = 1; i < Constants.PLAYER_COUNT; i++) {
        players[i].move = generateMove();
      }

      // determine if victory conditions met

      let result = calculateResult({players, draws});
      players = result.players;
      draws = result.draws;

      winningPlayer = checkWinConditions(players, state);

      return Object.assign({}, state, {
        players,
        winningPlayer,
        draws
      });
    }

    case Constants.ACTIONS.CLEAR_MOVES: {
      // clone the players array to ensure we don't mutate state directly
      let players = state.players.slice(0);

      // clear all moves
      players.forEach((player) => {
        player.move = Constants.NO_MOVE;
      });

      return Object.assign({}, state, {
        players
      });
    }

    default: return state;
  }
}

export default GameReducer;
