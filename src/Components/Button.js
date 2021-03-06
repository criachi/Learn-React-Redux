import React from 'react';
import { changeRectColorsAction } from '../Actions/actionCreators.js';
import { resetRectColorsAction } from '../Actions/actionCreators.js';
import { connect } from 'react-redux';

class Button extends React.Component {
    render() {
      return (
        <button className="btn" onClick={this.props.onClick}>{this.props.text}</button>
      )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => { 
    if (ownProps.text === "Button") {
      return { onClick: () => dispatch(changeRectColorsAction("#0000FF", "#FF0000")) };
    } else if (ownProps.text === "Reset") {
      return { onClick: () => dispatch(resetRectColorsAction("#FFFFFF")) };
    }    
}
  
Button = connect(null, mapDispatchToProps)(Button);

export default Button;