import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';
import Move from './Move';

class Game extends React.Component {
  render () {
    return (
      <div className="game">
        {this.props.players.map((player, index) => {
          return (
            <Move move={player.move} key={index} />
          );
        })}
      </div>
    );
  }
}

Game.propTypes = {
  players: PropTypes.array
};

export default Game;
