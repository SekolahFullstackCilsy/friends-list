import * as actionTypes from '../actions'

const initialState = {
  peoples: []
}

const peopleReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_PEOPLES:
      return {
        ...state,
        peoples: action.payload
      }
    default:
      return initialState
  }
}

export default peopleReducer