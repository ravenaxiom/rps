import React from 'react';
import PropTypes from 'prop-types';

import * as Constants from '../constants/Constants';

class ResetButton extends React.Component {


  render () {
    return (
      <button className="reset-button"
              onClick={this.props.onClickHandler.bind(this)}>
        {this.props.label}
      </button>
    );
  }
}

ResetButton.propTypes = {
  label: PropTypes.string,
  onClickHandler: PropTypes.func
};

export default ResetButton;
