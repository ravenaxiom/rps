import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as Constants from '../../src/js/constants/Constants';
import MoveButtons from '../../src/js/components/MoveButtons';

describe('<MoveButtons />', () => {
  let defaultProps = {
    onClickHandler: () => {},
    humanPlaying: true,
    winningPlayer: Constants.NO_WINNER
  }

	function setupTest (props = defaultProps) {
		return shallow(<MoveButtons {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.move-buttons').length).to.equal(1);
	});

  it('should render the correct number of buttons', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.move-button').length).to.equal(Constants.MOVES.length);
	});

  it('should be disabled when an AI game is running', () => {
		const wrapper = setupTest();
    const additionalWrapper = setupTest({
      onClickHandler: () => {},
      humanPlaying: false,
      winningPlayer: Constants.NO_WINNER
    });

		expect(wrapper.find('.move-button').first().prop('disabled')).to.equal(false);
    expect(additionalWrapper.find('.move-button').first().prop('disabled')).to.equal(true);
	});

  it('should be disabled when a player has won', () => {
		const wrapper = setupTest();
    const additionalWrapper = setupTest({
      onClickHandler: () => {},
      humanPlaying: true,
      winningPlayer: 0
    });

		expect(wrapper.find('.move-button').first().prop('disabled')).to.equal(false);
    expect(additionalWrapper.find('.move-button').first().prop('disabled')).to.equal(true);
	});

  it('should run the click callback when clicked', () => {
    const clickSpy = sinon.spy();
		const wrapper = setupTest({
      onClickHandler: clickSpy,
      winningPlayer: Constants.NO_WINNER
    });

		wrapper.find('.move-button').first().simulate('click');
    expect(clickSpy.calledOnce).to.be.true;
	});
});
