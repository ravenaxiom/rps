/**
 *  Functional component used to render a victory condition by either player
 */

import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';

const Result = (props) => {
  if (props.winningPlayer > -1) {
    return (
      <div className="result">
        Player {props.winningPlayer + 1} wins!
      </div>
    );
  } else {
    return null;
  }
};

Result.propTypes = {
  winningPlayer: PropTypes.number
};

export default Result;
