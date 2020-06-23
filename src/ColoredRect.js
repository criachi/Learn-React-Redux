import React from 'react';
import initialState from './InitialState.js';

class ColoredRect extends React.Component {
    render() {
      return (
        <div className={this.props.className} id={this.props.rectId} style={{ backgroundColor: this.props.color, borderRadius: this.props.borderRadius }}> {this.props.children} </div>
      )
    }
}

const mapStateToProps = (state = initialState, ownProps) => {
    if (ownProps.rectId === "1") {
      return { color: state.color1 };
    } else if (ownProps.rectId === "2") {
      return { color: state.color2 };
    }
}
  
ColoredRect = connect(mapStateToProps, null)(ColoredRect);