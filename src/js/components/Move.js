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
    <div className={ClassNames('move', {'move--visible': props.move !== Constants.NO_MOVE})}>
      {renderMove()}
    </div>
  );
};

Move.propTypes = {
  move: PropTypes.number
};

export default Move;
