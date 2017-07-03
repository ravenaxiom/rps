import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';

const Score = (props) => {
  return (
    <div className="score">
      {props.players.map((player, index) => {
        return (
          <div className="score-display" key={index}>
            Player {index + 1} (type: {player.type}) Wins: {player.wins} / {Constants.NUM_WINS_NEEDED}
          </div>
        );
      })}
      <div className="score-display">
        Draws: {props.draws}
      </div>
    </div>
  );
};

Score.propTypes = {
  players: PropTypes.array,
  draws: PropTypes.number
};

export default Score;
