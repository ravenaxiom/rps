import {createStore} from 'redux';

import Reducers from '../reducers/Reducers';

export default function buildStore (initialState) {
  return createStore(Reducers, initialState);
}
