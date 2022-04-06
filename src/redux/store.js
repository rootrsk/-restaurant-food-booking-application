import { createStore,combineReducers } from 'redux'
import authReducer from './reducer/auth'
import recipieReducer from './reducer/recipie'
import cartReducer from './reducer/cart'

const store = createStore(
    combineReducers({
        auth : authReducer,
        recipie :recipieReducer,
        cart: cartReducer
    })
)

export default store