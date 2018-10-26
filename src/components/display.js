import React, { Component } from 'react';
import { connect } from 'react-redux';

class Display extends Component {
    render() {
        return (
          <div className='display_container'>
            <div className='display accumulator'>
            {this.props.acc} {this.props.op}
            </div>
            <div className='display input'>
            {this.props.input}
            </div>
          </div>
        );
      }
}

function mapStateToProps(state){
  return {
      acc: state.acc,
      op: state.op,
      input: state.input
  }
}

export default connect(
  mapStateToProps
)(Display);