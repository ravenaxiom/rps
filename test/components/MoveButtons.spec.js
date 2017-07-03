import React from 'react';
import { shallow } from 'enzyme';

import * as Constants from '../../src/js/constants/Constants';
import MoveButtons from '../../src/js/components/MoveButtons';

describe('<MoveButtons />', () => {
  let defaultProps = {
    onClickHandler: () => {},
    winningPlayer: Constants.NO_WINNER
  }

	function setupTest (props = defaultProps) {
		return shallow(<MoveButtons {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.move-buttons').length).to.equal(1);
	});

  // TODO check moves renders correct number from constants

  // TODO setup spy, it should run callback on click
});
