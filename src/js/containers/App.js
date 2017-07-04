import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Game from '../components/Game';
import ResetButton from '../components/ResetButton';
import Result from '../components/Result';
import Score from '../components/Score';
import MoveButtons from '../components/MoveButtons';
import {setMove, resetGame, clearMoves } from '../actions/Actions';
import * as Constants from '../constants/Constants';

class App extends React.Component {
  constructor (props) {
    super(props);

    // bind handlers once in the constructor for best performance
    this.onMoveButtonsClick = this.onMoveButtonsClick.bind(this);
    this.onPlayHumanGameClick = this.onPlayHumanGameClick.bind(this);
    this.onWatchAiGameClick = this.onWatchAiGameClick.bind(this);

    // store the callback reference as a non-state property here, so it doesn't
    // trigger a refresh in setState. there's also no reason to persist it, so
    // don't keep it in the store
    this.aiGameInterval = null;
    this.clearMovesTimeout = null;
  }

  componentWillReceiveProps (nextProps) {
    // if a winner is set, clear the interval
    if (nextProps.winningPlayer !== Constants.NO_WINNER) {
      this.clearAiGameInterval();
      this.stopClearMovesTimeout();
    }
  }

  clearAiGameInterval () {
    if (this.aiGameInterval) {
      clearInterval(this.aiGameInterval);
      this.aiGameInterval = null;
    }
  }

  stopClearMovesTimeout() {
    if (this.clearMovesTimeout) {
      clearTimeout(this.clearMovesTimeout);
      this.clearMovesTimeout = null;
    }
  }

  setClearMovesTimeout () {
    this.stopClearMovesTimeout();

    // set all player moves to 0, create a new action to do so
    this.clearMovesTimeout = setTimeout(() => {
      this.props.clearMoves();
    }, Constants.CLEAR_MOVES_DELAY);
  }

  onMoveButtonsClick (index) {
    this.props.setMove(index);
    this.setClearMovesTimeout();
  }

  onPlayHumanGameClick () {
    this.clearAiGameInterval();
    this.stopClearMovesTimeout();
    this.props.resetGame(true);
  }

  onWatchAiGameClick () {
    // clear any existing timeout
    this.clearAiGameInterval();
    this.stopClearMovesTimeout();

    // reset game and do a move right away
    this.props.resetGame(false);
    this.props.setMove();

    // start the timeout
    this.aiGameInterval = setInterval(() => {
      console.log('timeout called');
      this.props.setMove();
    },  Constants.AI_MOVE_SPEED);
  }

  render () {
    return (
      <div className="app">
        <Score draws={this.props.draws} players={this.props.players} />

        <MoveButtons onClickHandler={this.onMoveButtonsClick}
          winningPlayer={this.props.winningPlayer}
          humanPlaying={this.props.humanPlaying} />
        <Game players={this.props.players} />

        <ResetButton
          label="Play a new game"
          buttonClass="play"
          winningPlayer={this.props.winningPlayer}
          onClickHandler={this.onPlayHumanGameClick}/>
        <ResetButton
          label="Watch an AI game"
          buttonClass="watch"
          winningPlayer={this.props.winningPlayer}
          onClickHandler={this.onWatchAiGameClick} />

        <Result winningPlayer={this.props.winningPlayer} />
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.array,
  winningPlayer: PropTypes.number,
  draws: PropTypes.number,
  setMove: PropTypes.func,
  resetGame: PropTypes.func,
  clearMoves: PropTypes.func,
  humanPlaying: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    draws: state.GameReducer.draws,
    players: state.GameReducer.players,
    humanPlaying: state.GameReducer.humanPlaying,
    winningPlayer: state.GameReducer.winningPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMove: (move, player) => dispatch(setMove(move, player)),
    resetGame: (humanGame) => dispatch(resetGame(humanGame)),
    clearMoves: () => dispatch(clearMoves())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
