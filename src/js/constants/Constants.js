/**
 *  Constants used across the app. These values control many parts of the app.
 */

// change this number to alter the number of wins needed to win the game
export const NUM_WINS_NEEDED = 3;

// delay in milliseconds between AI moves in an AI only game
export const AI_MOVE_SPEED = 2000;

// delay in milliseconds between clearing the moves made
export const CLEAR_MOVES_DELAY = 2000;

// general states
export const NO_WINNER = -1;
export const NO_MOVE = -1;
export const TYPE_HUMAN = 'HUMAN';
export const TYPE_AI = 'AI';

// this array contains a list of all possible moves, and which moves that move beats. it allows
// easy and complete customisation of game logic
export const MOVES = [
  { name: 'scissors', beats: 'paper' },
  { name: 'paper', beats: 'rock' },
  { name: 'rock', beats: 'scissors' }

  // uncomment this line to add 'spock' as a move, or add your own using this format
  // note that an image will need to be added for each custom move - placeholder text will be rendered
  // until one has been added
  // , { name: 'spock', beats: 'paper rock' }
];

// change this number to alter number of players in game
// note that changing this number will require slight updates to the rendering logic
// and win condition checking
export const PLAYER_COUNT = 2;

// redux actions
export const ACTIONS = {
  RESET_GAME: 'RESET_GAME',
  SET_MOVE: 'SET_MOVE',
  CLEAR_MOVES: 'CLEAR_MOVES'
};
