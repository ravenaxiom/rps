import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import * as Constants from '../../src/js/constants/Constants';
import ResetButton from '../../src/js/components/ResetButton';

describe('<ResetButton />', () => {
  let defaultProps = {
    label: 'My Label',
    buttonClass: 'button-class',
    onClickHandler: () => {},
    winningPlayer: Constants.NO_WINNER
  }

	function setupTest (props = defaultProps) {
		return shallow(<ResetButton {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button').length).to.equal(1);
	});

  it('should render with the provided class prop', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button--button-class').length).to.equal(1);
	});

  it('should render the correct label prop', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button').text()).to.equal(defaultProps.label);
	});

  it('should be highlighted if a player wins', () => {
		const wrapper = setupTest();

    const additionalWrapper = setupTest({
      label: 'My Label',
      buttonClass: 'button-class',
      onClickHandler: () => {},
      winningPlayer: 0
    });

		expect(wrapper.find('.reset-button--highlighted').length).to.equal(0);
    expect(additionalWrapper.find('.reset-button--highlighted').length).to.equal(1);
	});

  it('should run the click callback when clicked', () => {
    const clickSpy = sinon.spy();
		const wrapper = setupTest({
      onClickHandler: clickSpy,
      label: 'My Label'
    });

		wrapper.find('.reset-button').simulate('click');
    expect(clickSpy.calledOnce).to.be.true;
	});
});
