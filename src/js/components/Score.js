import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import * as Constants from '../constants/Constants';

const Score = (props) => {
  return (
    <div className="score">
      {props.players.map((player, index) => {
        return (
          <div className={Classnames('score-item', `score-item--player-${index + 1}`, `score-item--type-${player.type}`)} key={index}>
            Player {index + 1}: <span className="score-item-value">{player.wins} / {Constants.NUM_WINS_NEEDED}</span>
          </div>
        );
      })}
      <div className="score-item score-item--draws">
        Draws:
        <span className="score-item-value">{props.draws}</span>
      </div>
    </div>
  );
};

Score.propTypes = {
  players: PropTypes.array,
  draws: PropTypes.number
};

export default Score;
