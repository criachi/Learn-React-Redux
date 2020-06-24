import React from 'react';
import ColoredRect from './ColoredRect.js';
import { connect } from 'react-redux';
import { updateInputStringAction } from '../actionCreators.js';
import initialState from '../InitialState.js';

class TextBoxContainer extends React.Component {
  render() {
    return (
      <ColoredRect className="textRect" color="#FFFFFF" borderRadius="15px"> <input type="text" id={this.props.textBoxID} readOnly={this.props.isReadOnly} value={this.props.text} onChange={(event) => this.props.onInputChange(event.target.value)}></input> </ColoredRect>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  if (ownProps.textBoxID === "inputBox") {
    return { onInputChange: (input) => dispatch(updateInputStringAction(input)) };
  } 
  return {};
}

const mapStateToProps = (state = initialState, ownProps) => {
  if(ownProps.textBoxID === "reverseBox") {
    return { text: state.inputString.split("").reverse().join("") }
  }
  if(ownProps.textBoxID === "inputLenBox") {
    return { text: state.inputString.length }
  }
  return {};
}

TextBoxContainer = connect(mapStateToProps, mapDispatchToProps)(TextBoxContainer);

export default TextBoxContainer;