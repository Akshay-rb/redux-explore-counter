import {createStore, combineReducers} from 'redux'

import countReducer from '../reducers/countReducer'
import todoReducer from '../reducers/todoReducer'

const configureStore =()=>{
    const store = createStore(combineReducers({
        count : countReducer,
        todo : todoReducer
    }))
    return store
}

export default configureStore