import * as Constants from '../constants/Constants';

function buildPlayers (isHumanPlaying) {
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

const initialState = {
  humanPlaying: true,
  startAiGame: false,
  draws: 0,
  winningPlayer: Constants.NO_WINNER,
  players: buildPlayers(true)
};

function generateMove () {
  return Math.floor(Math.random() * Constants.MOVES.length);
}

// this needs to be written in a flexible way to allow any number of
// players to play the game
function calculateResult (result) {
  console.log(result.players);

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

function checkWinConditions (players, state) {
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

function GameReducer (state = initialState, action) {
  switch (action.type) {
    case Constants.ACTIONS.RESET_GAME: {
      // TODO consolidate this object into a function thats written once
      return Object.assign({}, {
        humanPlaying: action.humanPlaying,
        startAiGame: false,
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

    default: return state;
  }
}

export default GameReducer;
