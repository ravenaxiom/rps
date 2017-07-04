import React from 'react';
import PropTypes from 'prop-types';
import Classnames from 'classnames';

import * as Constants from '../constants/Constants';

const ResetButton = (props) => {
  return (
    <button className={Classnames('reset-button',
                          `reset-button--${props.buttonClass}`,
                          {'reset-button--highlighted': props.winningPlayer > Constants.NO_WINNER})}
            onClick={props.onClickHandler.bind(this)}>
      {props.label}
    </button>
  );
};

ResetButton.propTypes = {
  label: PropTypes.string,
  buttonClass: PropTypes.string,
  onClickHandler: PropTypes.func,
  winningPlayer: PropTypes.number
};

export default ResetButton;
