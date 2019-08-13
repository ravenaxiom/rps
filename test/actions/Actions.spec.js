import {ACTIONS} from '../../src/js/constants/Constants';
import {resetGame, setMove, clearMoves} from '../../src/js/actions/Actions';

describe('Actions', () => {
  it('should create an action to reset the game', () => {
    let expectedAction = {
      type: ACTIONS.RESET_GAME,
      humanPlaying: true
    };

    // need to use 'deep' equals, because normal equals will compare by reference not value
    expect(resetGame(true)).to.deep.equal(expectedAction);
  });

  it('should create an action to make a move', () => {
    let expectedAction = {
      type: ACTIONS.SET_MOVE,
      move: 'Test move'
    };

    expect(setMove('Test move')).to.deep.equal(expectedAction);
  });

  it('should create an action to clear existing moves', () => {
    let expectedAction = {
      type: ACTIONS.CLEAR_MOVES
    };

    expect(clearMoves()).to.deep.equal(expectedAction);
  });
});
