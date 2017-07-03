import React from 'react';
import { shallow } from 'enzyme';

import * as Constants from '../../src/js/constants/Constants';
import Move from '../../src/js/components/Move';

describe('<Move />', () => {
	const defaultProps = {};

	function setupTest (props = defaultProps) {
		return shallow(<Move {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.move').length).to.equal(1);
	});

  it('should be hidden if no move is provided', () => {
		const wrapper = setupTest({
      move: Constants.NO_MOVE
    });

		expect(wrapper.find('.move--visible').length).to.equal(0);
	});

  it('should be visible if a valid move is provided', () => {
		const wrapper = setupTest({
      move: 0
    });

		expect(wrapper.find('.move--visible').length).to.equal(1);
	});

  it('should render the correct move prop', () => {
		const wrapper = setupTest({
      move: 0
    });

		expect(wrapper.find('.move').text()).to.equal(Constants.MOVES[0].name);
	});
});
