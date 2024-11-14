
// src/store/index.js

import { createStore, applyMiddleware } from 'redux' // Import createStore and applyMiddleware from redux
 import { thunk } from 'redux-thunk' // Import thunk middleware for handling asynchronous actions in Redux

import rootReducer from '../reducers' // Import the root reducer that combines all reducers

const store = createStore(rootReducer, applyMiddleware(thunk)) // Create a Redux store with the rootReducer and applyMiddleware to add thunk

export default store // Export the store as the default export
