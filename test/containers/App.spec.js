import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import * as Constants from '../../src/js/constants/Constants';
import App from '../../src/js/containers/App';
import buildStore from '../../src/js/store/Store';

describe('<App />', () => {
  const store = buildStore();

	function setupTest () {
		return mount(
      <Provider store={store}>
        <App />
      </Provider>
    );
	}

	it('should render all components correctly', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.app').length).to.equal(1);
    expect(wrapper.find('.score').length).to.equal(1);
    expect(wrapper.find('.move-buttons').length).to.equal(1);
    expect(wrapper.find('.game').length).to.equal(1);
    expect(wrapper.find('.reset-button').length).to.equal(2);
    expect(wrapper.find('.result').length).to.equal(0);
	});
});
