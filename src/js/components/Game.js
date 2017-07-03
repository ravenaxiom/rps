import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';
import Move from './Move';

const Game = (props) => {
  return (
    <div className="game">
      {props.players.map((player, index) => {
        return (
          <Move move={player.move} key={index} />
        );
      })}
    </div>
  );
};

Game.propTypes = {
  players: PropTypes.array
};

export default Game;
