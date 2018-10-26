import { combineReducers } from 'redux';
import { actionTypes } from '../actions';

const defaultState = {
  acc: '0',
  input: '0',
  op: null,
  dot: false
};

const calculate = (state, action) => {
  switch (state.op) {
    case '+':
      return {
        acc: parseFloat(state.acc) + parseFloat(state.input),
        op: null,
        input: '0',
        dot: false
      }
    case '-':
      return {
        acc: parseFloat(state.acc) - parseFloat(state.input),
        op: null,
        input: '0',
        dot: false
      }

    case '*':
      return {
        acc: parseFloat(state.acc) * parseFloat(state.input),
        op: null,
        input: '0',
        dot: false
      }

    case '/':
      return {
        acc: parseFloat(state.acc) / parseFloat(state.input),
        op: null,
        input: '0',
        dot: false
      }
    default:
      const newOp = action === undefined ? null : action.value
      return {
        acc: state.input,
        op: newOp,
        input: '0',
        dot: false
      };
  }
}

const boardReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.number_clicked:
      return {
        ...state,
        input: (state.input === '0' ? '': state.input) + action.value
      };
    case actionTypes.operation_clicked:
      if (state.input !== '0') {
        return calculate(state, action)
      }
      else {
        return {
          ...state,
          op: action.value
        }
      }
    case actionTypes.cal_clicked:
      if(state.input !== '0'){
        return calculate(state, undefined)
      }
      else
        return state;
    case actionTypes.clear_clicked:
      return Object.assign({}, defaultState)
    case actionTypes.dot_clicked:
      if(!state.dot){
        return {
          ...state,
          dot: true,
          input: state.input + '.'
        }
      }
      return state;
    default:
      return state;
  }
}

export default boardReducer;