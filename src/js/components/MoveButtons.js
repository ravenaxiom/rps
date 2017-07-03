import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import * as Constants from '../constants/Constants';

const MoveButtons = (props) => {
  return (
    <div className="move-buttons">
      {Constants.MOVES.map((move, index) => {
        return (<button className={Classnames('move-button', {move})}
                        onClick={() => props.onClickHandler(index)}
                        disabled={props.winningPlayer > -1}
                        key={index}>
            {move.name}
        </button>);
      })}
    </div>
  );
};

MoveButtons.propTypes = {
  onClickHandler: PropTypes.func,
  winningPlayer: PropTypes.number
};

export default MoveButtons;
