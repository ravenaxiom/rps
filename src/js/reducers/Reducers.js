/**
 * In a larger app, this file would combine multiple reducers - for now just include the single
 * GameReducer
 */

import {combineReducers} from 'redux';

import * as Constants from '../constants/Constants';
import GameReducer from './GameReducer';

const Reducer = combineReducers({
  GameReducer
});

export default Reducer;
