import {SET_USER} from '../constants/user.constant'

const userState = {
  name: '',
  gender: '',
  email: '',
  hobies: []
}

const userReducer = (state = userState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        name: action.payload.name,
        gender: action.payload.gender,
        email: action.payload.email,
        hobies: action.payload.hobies
      }
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name
      }
    default:
      return state
  }
}

export default userReducer