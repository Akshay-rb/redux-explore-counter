const {createStore , combineReducers , applyMiddleware} = require('redux')
const thunk = require('redux-thunk') // npm install --save redux-thunk
const axios = require('axios').default // npm install --save axios

const usersReducer =(state =[], action) =>{
    switch(action.type){
        case 'SET_USERS':{
            return [...action.payload]
        }
        default:{
            return [...state]
        }
    }
}

const configureStore =()=>{
    const store = createStore(combineReducers({
        users: usersReducer
    }), applyMiddleware(thunk.default))
    return store
}

const store = configureStore()

console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

const setUsers=(users)=>{
    return {
        type:'Set_USERS',
        payload:users
    }
}

// store.dispatch(setUsers(['user1', 'user2']))

// 2 types of actions - sync , async- async for network calls

const startSetUsers =() =>{
    return (dispatch) =>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users = response.data
            dispatch(setUsers(users))
        })
        .catch(error=>console.log(error))
    }
    
}

store.dispatch(startSetUsers())