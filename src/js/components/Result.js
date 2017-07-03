import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';

class Result extends React.Component {

  render () {
    if (this.props.winningPlayer > -1) {
      return (
        <div className="result">
          Player {this.props.winningPlayer + 1} wins!
        </div>
      );
    } else {
      return null;
    }
  }
}

Result.propTypes = {
  winningPlayer: PropTypes.number
};

export default Result;
