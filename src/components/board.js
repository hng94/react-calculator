import React, { Component } from 'react';
import { number_clicked, operation_clicked, cal_clicked, clear_clicked, dot_clicked } from '../actions';
import {bindActionCreators} from 'redux';

import { connect } from 'react-redux';

class Board extends Component {
    
    constructor(props){
        super(props);
        this.handleNumberClick.bind(this);
        this.handleOperationClick.bind(this);
    };

    handleNumberClick(value){
        return this.props.number_clicked(value)
    }
    
    handleOperationClick(value){
        return this.props.operation_clicked(value)
    }

    handleCalClick(){
        return this.props.cal_clicked()
    }

    handleClearClick(){
        return this.props.clear_clicked()
    }

    handleDotClick(){
        return this.props.dot_clicked();
    }

    render() {
        return (
            <div>
                <div className='board_container'>
                    <div className='numbers'>
                        <div onClick={()=> this.handleNumberClick(1)} className='number'>1</div>
                        <div onClick={()=> this.handleNumberClick(2)} className='number'>2</div>
                        <div onClick={()=> this.handleNumberClick(3)} className='number'>3</div>
                        <div onClick={()=> this.handleNumberClick(4)} className='number'>4</div>
                        <div onClick={()=> this.handleNumberClick(5)} className='number'>5</div>
                        <div onClick={()=> this.handleNumberClick(6)} className='number'>6</div>
                        <div onClick={()=> this.handleNumberClick(7)} className='number'>7</div>
                        <div onClick={()=> this.handleNumberClick(8)} className='number'>8</div>
                        <div onClick={()=> this.handleNumberClick(9)} className='number'>9</div>
                    </div>
                    <div className='operations'>
                        <div onClick={()=> this.handleOperationClick('+')} className='operation'>+</div>
                        <div onClick={()=> this.handleOperationClick('-')} className='operation'>-</div>
                        <div onClick={()=> this.handleOperationClick('*')} className='operation'>*</div>
                        <div onClick={()=> this.handleOperationClick('/')} className='operation'>/</div>
                    </div>
                </div>

                <div className='board_container'>
                    <div className='numbers'>
                        <div onClick={()=> this.handleClearClick()} className='number clear'>C</div>
                        <div onClick={()=> this.handleNumberClick(0)} className='number'>0</div>
                        <div onClick={()=> this.handleDotClick()} className='number dot'>.</div>
                    </div>
                    <div className='operations'>
                        <div onClick={()=> this.handleCalClick()} className='operation cal'>=</div>
                    </div>
                </div>
            </div>

        );
    }
}

function mapStateToProps(state){
    return {
    }
}

function mapDispatchToProps(dispatch){
    return {
        number_clicked: bindActionCreators(number_clicked, dispatch),
        operation_clicked: bindActionCreators(operation_clicked, dispatch),
        cal_clicked: bindActionCreators(cal_clicked, dispatch),
        clear_clicked: bindActionCreators(clear_clicked, dispatch),
        dot_clicked: bindActionCreators(dot_clicked, dispatch),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
 )(Board);