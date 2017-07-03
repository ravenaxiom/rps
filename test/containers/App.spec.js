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

	it('should render a <div> with an identifying class', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.app').length).to.equal(1);
	});
});

// http://redux.js.org/docs/recipes/WritingTests.html
