import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';

const ResetButton = (props) => {
  return (
    <button className="reset-button"
            onClick={props.onClickHandler.bind(this)}>
      {props.label}
    </button>
  );
};

ResetButton.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default ResetButton;
