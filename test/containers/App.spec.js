import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import sinon from 'sinon';

import * as Constants from '../../src/js/constants/Constants';
import App from '../../src/js/containers/App';
import buildStore from '../../src/js/store/Store';

describe('<App />', () => {
  const store = buildStore();

	function setupTest () {
    // TODO manually set store data here for testing

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

  // click a button and check a move has been made
  it('should do a move if a move button is clicked', () => {
		const wrapper = setupTest();

		expect(wrapper.find('.reset-button').first().length).to.equal(1);
	});

  // see if game over happens correctly
});

// http://redux.js.org/docs/recipes/WritingTests.html
