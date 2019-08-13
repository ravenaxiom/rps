/**
 *  Functional component rendering an individual move made by a player.
 */

import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import * as Constants from '../constants/Constants';

const Move = (props) => {
  function renderMove () {
    if (props.move >= 0) {
      return Constants.MOVES[props.move].name;
    }
  }

  return (
    <div className={ClassNames('move', {'move--visible': props.move !== Constants.NO_MOVE}, `move--${renderMove()}`)}>
      <span className="move-name">{renderMove()}</span>
    </div>
  );
};

Move.propTypes = {
  move: PropTypes.number
};

export default Move;
