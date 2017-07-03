import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import Game from '../components/Game';
import ResetButton from '../components/ResetButton';
import Result from '../components/Result';
import Score from '../components/Score';
import MoveButtons from '../components/MoveButtons';
import {setMove, resetGame, startAiGame} from '../actions/Actions';

class App extends React.Component {
  constructor () {
    super();

    // bind handlers once in the constructor for best performance
    this.onMoveButtonsClick = this.onMoveButtonsClick.bind(this);
    this.onPlayHumanGameClick = this.onPlayHumanGameClick.bind(this);
    this.onWatchAiGameClick = this.onWatchAiGameClick.bind(this);
  }

  onMoveButtonsClick (index) {
    this.props.setMove(index);
  }

  onPlayHumanGameClick () {
    this.props.resetGame(true);
  }

  onWatchAiGameClick () {
    this.props.startAiGame(() => {
      // TODO split out setMove into 'setPlayerMove' and 'doAiMove'
      // this.props.doAiMove();

      console.log('test');
    });
  }

  render () {
    return (
      <div className="app">
        <Score draws={this.props.draws} players={this.props.players} />

        <ResetButton label="Play a new game" onClickHandler={this.onPlayHumanGameClick}/>
        <ResetButton label="Watch an AI game" onClickHandler={this.onWatchAiGameClick} />

        <Game players={this.props.players} />
        <MoveButtons onClickHandler={this.onMoveButtonsClick} winningPlayer={this.props.winningPlayer} />

        <Result winningPlayer={this.props.winningPlayer} />
      </div>
    );
  }
}

App.propTypes = {
  players: PropTypes.array,
  humanPlaying: PropTypes.bool,
  winningPlayer: PropTypes.number,
  draws: PropTypes.number,
  setMove: PropTypes.func,
  resetGame: PropTypes.func,
  startAiGame: PropTypes.func
};

const mapStateToProps = state => {
  return {
    draws: state.game.draws,
    players: state.game.players,
    humanPlaying: state.game.humanPlaying,
    winningPlayer: state.game.winningPlayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMove: (move, player) => dispatch(setMove(move, player)),
    resetGame: (humanGame) => dispatch(resetGame(humanGame)),
    startAiGame: (moveCallback) => dispatch(startAiGame(moveCallback))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
