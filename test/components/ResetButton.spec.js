import React from 'react';
import { shallow } from 'enzyme';

import * as Constants from '../../src/js/constants/Constants';
import ResetButton from '../../src/js/components/ResetButton';

describe('<ResetButton />', () => {
  let defaultProps = {
    label: 'My Label',
    onClickHandler: () => {}
  }

	function setupTest (props = defaultProps) {
		return shallow(<ResetButton {...props} />);
	}

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button').length).to.equal(1);
	});

  it('should render the correct label prop', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button').text()).to.equal(defaultProps.label);
	});

  // TODO setup spy, it should run callback on click
});
