import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import { startSetUser } from './actions/users'

import App from './App'

import configureStore from './store/configureStore'

const store = configureStore()
console.log(store.getState());

store.subscribe(()=>{
    // console.log(store)
    console.log(store.getState())
})

store.dispatch(startSetUser())

const ele =(
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(ele, document.getElementById("root"))