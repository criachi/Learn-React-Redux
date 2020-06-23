import React from 'react';

// action creators 
export function changeRectColorsAction(color1, color2) {
    return {
      type: 'CHANGE_COLORS',
      color1: color1,
      color2: color2
    }
}
  
export function resetRectColorsAction(color) {
    return {
      type: 'RESET_COLORS',
      color: color
    }
}