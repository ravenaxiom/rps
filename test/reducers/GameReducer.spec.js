import GameReducer, {buildPlayers, generateMove, checkWinConditions, calculateResult} from '../../src/js/reducers/GameReducer';
import * as Constants from '../../src/js/constants/Constants';

describe('GameReducer', () => {
  it('scissors should beat paper', () => {
    const result = calculateResult({
      players: [
        { move: 0, wins: 0},
        { move: 1, wins: 0}
      ],
      draws: 0
    });

    expect(result.players[0].wins).to.equal(1);
  });

  it('paper should beat rock', () => {
    const result = calculateResult({
      players: [
        { move: 1, wins: 0},
        { move: 2, wins: 0}
      ],
      draws: 0
    });

    expect(result.players[0].wins).to.equal(1);
  });

  it('rock should beat scissors', () => {
    const result = calculateResult({
      players: [
        { move: 2, wins: 0},
        { move: 0, wins: 0}
      ],
      draws: 0
    });

    expect(result.players[0].wins).to.equal(1);
  });

  it('a player should win the game if they have a full score', () => {
    const result = checkWinConditions([
      { wins: Constants.NUM_WINS_NEEDED },
      { wins: 1 }
    ]);

    expect (result).to.equal(0);
  });

  it('neither player should win the game if they dont have a full score', () => {
    const result = checkWinConditions({
      players: [
        { wins: 0 },
        { wins: 1 }
      ]
    });

    expect (result).to.equal(Constants.NO_WINNER);
  });

  it('the reset game action should reset the game', () => {
    const state = GameReducer({}, {
      type: Constants.ACTIONS.RESET_GAME,
      humanPlaying: true
    });

    expect(state).to.deep.equal({
      humanPlaying: true,
      draws: 0,
      winningPlayer: Constants.NO_WINNER,
      players: buildPlayers(true)
    });
  });

  it('should generate a random move', () => {
    const result = generateMove();

    expect(result).is.above(Constants.NO_MOVE).and.is.below(Constants.MOVES.length);
  });

  it('in a human game the set move action should set the player move and generate an AI move', () => {
    const state = GameReducer({
      draws: 0,
      winningPlayer: Constants.NO_WINNER,
      players: [
        { move: Constants.NO_MOVE, wins: 0 },
        { move: Constants.NO_MOVE, wins: 0 }
      ],
      humanPlaying: true
    }, {
      type: Constants.ACTIONS.SET_MOVE,
      move: 0
    });

    expect(state.players[0].move).to.equal(0);
    expect(state.players[1].move).is.above(Constants.NO_MOVE).and.is.below(Constants.MOVES.length);
  });

  it('n an AI game the set move action should randomly choose both player actions and calculate the result', () => {
    const state = GameReducer({
      draws: 0,
      winningPlayer: Constants.NO_WINNER,
      players: [
        { move: Constants.NO_MOVE, wins: 0 },
        { move: Constants.NO_MOVE, wins: 0 }
      ],
      humanPlaying: false
    }, {
      type: Constants.ACTIONS.SET_MOVE
    });

    expect(state.players[0].move).is.above(Constants.NO_MOVE).and.is.below(Constants.MOVES.length);
    expect(state.players[1].move).is.above(Constants.NO_MOVE).and.is.below(Constants.MOVES.length);
  });
});
