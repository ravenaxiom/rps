import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Classnames from 'classnames';

import * as Constants from '../constants/Constants';

class MoveButtons extends React.Component {
  render () {
    return (
      <div className="move-buttons">
        {Constants.MOVES.map((move, index) => {
          return (<button className={Classnames('move-button', {move})}
                          onClick={() => this.props.onClickHandler(index)}
                          disabled={this.props.winningPlayer > -1}
                          key={index}>
              {move.name}
          </button>);
        })}
      </div>
    );
  }
}

MoveButtons.propTypes = {
  onClickHandler: PropTypes.func,
  winningPlayer: PropTypes.number
};

export default MoveButtons;
