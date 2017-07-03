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
    draws: 0
  }

	function setupTest (props = defaultProps) {
		return shallow(<Score {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.score').length).to.equal(1);
    // expect(wrapper.find('.score-display').length).to.equal(1); // GREATER than 1
	});

  // it('should render nothing if no winner is set', () => {
	// 	const wrapper = setupTest({
  //     winningPlayer: Constants.NO_WINNER
  //   });
  //
	// 	expect(wrapper.find('.result').length).to.equal(0);
	// });

  // it('should render winner display correctly', () => {
	// 	const wrapper = setupTest();
  //
	// 	expect(wrapper.find('.result').text()).to.equal('Player 1 wins!');
	// });
});
