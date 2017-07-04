import React from 'react';
import { shallow } from 'enzyme';

import * as Constants from '../../src/js/constants/Constants';
import Score from '../../src/js/components/Score';

describe('<Score />', () => {
  let defaultProps = {
    players: [
      { type: 0, wins: 2 },
      { type: 0, wins: 1 }
    ],
    draws: 3
  };

	function setupTest (props = defaultProps) {
		return shallow(<Score {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.score').length).to.equal(1);
	});

  it('should render the correct number of children', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.score-item-value').length).to.equal(3);
	});

  it('should render score labels and values correctly', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.score-item--player-1').text()).to.equal(`Player 1: 2 / ${Constants.NUM_WINS_NEEDED}`);
    expect(wrapper.find('.score-item--player-2').text()).to.equal(`Player 2: 1 / ${Constants.NUM_WINS_NEEDED}`);
    expect(wrapper.find('.score-item--draws').text()).to.equal('Draws:3');
	});
});
