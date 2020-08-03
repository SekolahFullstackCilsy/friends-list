import { combineReducers, createStore } from "redux"
import peopleReducer from './reducers/people'

const rootReducer = combineReducers({
  peopleReducer
})

const store = createStore(rootReducer)

export default store