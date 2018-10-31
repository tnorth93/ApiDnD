import { createStore, applyMiddleware } from 'redux';
import thunk from './middleware/redux-thunk';
import reduxReporter from './middleware/redux-reporter';