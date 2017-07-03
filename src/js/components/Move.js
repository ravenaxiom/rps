import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';

import * as Constants from '../constants/Constants';

class Move extends React.Component {
  renderMove () {
    if (this.props.move >= 0) {
      return Constants.MOVES[this.props.move].name;
    }
  }

  render () {
    return (
      <div className={ClassNames('move', {'move--visible': this.props.move !== Constants.NO_MOVE})}>
        {this.renderMove()}
      </div>
    );
  }
}

Move.propTypes = {
  move: PropTypes.number
};

export default Move;
