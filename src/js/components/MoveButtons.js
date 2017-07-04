import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import * as Constants from '../constants/Constants';

const MoveButtons = (props) => {
  return (
    <div className="move-buttons">
      {Constants.MOVES.map((move, index) => {
        return (<button className="move-button"
                        onClick={() => props.onClickHandler(index)}
                        disabled={props.winningPlayer > -1 || !props.humanPlaying}
                        key={index}>
            {move.name}
        </button>);
      })}
    </div>
  );
};

MoveButtons.propTypes = {
  onClickHandler: PropTypes.func,
  humanPlaying: PropTypes.bool,
  winningPlayer: PropTypes.number
};

export default MoveButtons;
