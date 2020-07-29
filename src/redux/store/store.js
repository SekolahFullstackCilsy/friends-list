import {combineReducers, createStore} from 'redux'

import users from '../reducers/user.reducer'
import products from '../reducers/product.reducer'

const rootReducers = combineReducers({
  users,
  products
})

const store = createStore(rootReducers)

export default store