import React from 'react';
import { shallow } from 'enzyme';

import * as Constants from '../../src/js/constants/Constants';
import Game from '../../src/js/components/Game';

describe('<Game />', () => {
  let defaultProps = {
    players: ['One', 'Two', 'Three']
  }

	function setupTest (props = defaultProps) {
		return shallow(<Game {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.game').length).to.equal(1);
	});

  it('should render no children', () => {
		const wrapper = setupTest({
      players: []
    });

		expect(wrapper.children().length).to.equal(0);
	});

  it('should render render the correct number of children', () => {
		const wrapper = setupTest();

		expect(wrapper.children().length).to.equal(defaultProps.players.length);
	});
});
