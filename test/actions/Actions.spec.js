import {ACTIONS} from '../../src/js/constants/Constants';
import {resetGame, setMove} from '../../src/js/actions/Actions';

describe('Actions', () => {
  it('should create an action to reset the game', () => {
    let expectedAction = {
      type: ACTIONS.RESET_GAME,
      humanPlaying: true
    };

    expect(resetGame(true)).to.deep.equal(expectedAction); // need to use 'deep' because === wont equal
  });

  it('should create an action to make a move', () => {
    let expectedAction = {
      type: ACTIONS.SET_MOVE,
      move: 'Test move'
    };

    expect(setMove('Test move')).to.deep.equal(expectedAction);
  });
});
