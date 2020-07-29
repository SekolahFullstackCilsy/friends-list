import {SET_USER} from '../constants/user.constant'

export const setUser = (payload) => {
  return {
    type: SET_USER,
    payload
  }
}

export const changeName = (payload) => {
  return {
    type: 'CHANGE_NAME',
    payload
  }
}