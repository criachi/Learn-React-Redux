import React from 'react';
import initialState from './InitialState.js';

// reducers (change the state in the store)
function app(state = initialState, action) {
    switch(action.type) {
      case "CHANGE_COLORS":
        return Object.assign({}, state, { color1: action.color1, color2: action.color2 });
      case "RESET_COLORS":
        return Object.assign({}, state, { color1: action.color, color2: action.color });
      default:
        return state;  
    }
}

export default app;