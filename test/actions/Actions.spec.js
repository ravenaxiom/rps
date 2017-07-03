import {ACTIONS} from '../../src/js/constants/Constants';
import {resetGame, setMove, startAiGame} from '../../src/js/actions/Actions';

describe('gameActions', () => {
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

  // it('should create an action to start an AI game', () => {
  //   let expectedAction = {
  //     type: ACTIONS.START_AI_GAME
  //   };
  //
  //   expect(startAiGame()).to.deep.equal(expectedAction);
  // });
});
