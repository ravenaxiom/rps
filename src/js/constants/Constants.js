// change this number to alter number of players in game
export const PLAYER_COUNT = 2;

// change this number to alter the number of wins needed to win the game
export const NUM_WINS_NEEDED = 3;

export const TYPE_HUMAN = 'HUMAN';
export const TYPE_AI = 'AI';

// delay between AI moves in an AI only game
export const AI_MOVE_SPEED = 2000;

export const NO_WINNER = -1;
export const NO_MOVE = -1;
export const MOVES = [
  { name: 'scissors', beats: 'paper', image: 'scissors.svg' },
  { name: 'paper', beats: 'rock', image: 'paper.svg' },
  { name: 'rock', beats: 'scissors', image: 'rock.svg' }

  // uncomment this line to add 'spock' as a move
  // , { name: 'spock', beats: 'paper rock', image: 'spock.svg' }
];

export const ACTIONS = {
  RESET_GAME: 'RESET_GAME',
  SET_MOVE: 'SET_MOVE',
  START_AI_GAME: 'START_AI_GAME'
};
