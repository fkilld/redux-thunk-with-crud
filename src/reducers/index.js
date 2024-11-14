// src/reducers/index.js

import { combineReducers } from 'redux' // Import combineReducers from redux to combine multiple reducers
import postReducer from './postReducer' // Import the postReducer for managing post-related state

export default combineReducers({
  // Export the combined reducers as the default export
  postState: postReducer, // Assign postReducer to the postState key in the global state
})
