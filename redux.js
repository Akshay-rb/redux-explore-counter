const { createStore , combineReducers } =require('redux')

// reducer - a function resposible for updating a property value in the state.
// each property in state has its own reducer

/*
defining the reducer separately

const countReducer =(state=0,action)=>{
    switch(action.type){
        case 'INCREMENT' :{
            return state+1
        }
        default :{
            return state
        }
    }
}
*/

const userReducer =(state={}, action)=>{
    switch(action.type){
        case 'SET_USER':{
            return Object.assign({}, action.payload)
        }
        case 'REMOVE_USER':{
            return {}
        }
        default :{
            return Object.assign({}, state)
        }
    }
}

const studentsReducer = (state=[],action)=>{
    switch(action.type){
        case 'ADD_STUDENT':{
            return [].concat(state, action.payload)
        }
        case 'REMOVE_STUDENT':{
            return state.filter(student=> student.id !== action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}

const store = createStore(combineReducers({
    // count: countReducer // calling the reducer 
    count: (state=0, action) =>{
        switch(action.type){
            case 'INCREMENT':{
                return state+1
            }
            case 'DECREMENT':{
                return state-1
            }
            case 'RESET':{
                return state =0
            }
            case 'INCREMENT_BY':{
                return state = action.payload
            }
            default:{
                return state
            }
        }
    },
    user : userReducer,
    students: studentsReducer
    // studets: studentsReducer

}))

// console.log(store)
// console.log(store.getState())

store.subscribe(()=>{
    console.log(store.getState())
})

// action generators

const increment = ()=>{
    return {
        type:'INCREMENT'
    }
}

const decrement =()=>{
    return {
        type:'DECREMENT'
    }
}

const reset =()=>{
    return {
        type:'RESET'
    }
}
const incrementBy =(value)=>{
    return {
        type:'INCREMENT_BY',
        payload:value
    }
}

const setUser =(user)=>{
    return {
        type:'SET_USER',
        payload:user
    }
}

const removeUser =()=>{
    return {
        type:'REMOVE_USER'
    }
}

const addStudent = (student)=>{
    return {
        type:'ADD_STUDENT',
        payload:student
    }
}

const removeStudent =(id)=>{
     return {
         type:'REMOVE_STUDENT',
         payload:id
     }
}

store.dispatch(increment())

// console.log('current user is -',store.getState().user)

// store.dispatch(setUser({id:1, name:'ani', email:'ani@gmail.com'}))

// console.log('current user is - ',store.getState().user)

// store.dispatch(removeUser()) // user object should be empty

store.dispatch(addStudent({id:1,name:'Ravi'}))

store.dispatch(addStudent({id:2,name:'Mavi'}))
store.dispatch(addStudent({id:3,name:'madhura'}))

store.dispatch(removeStudent(2))


// store.dispatch(increment())
// store.dispatch(increment())


// //decrement
// store.dispatch(decrement())

// //reset
// store.dispatch(reset())

// // incremen by
// store.dispatch(incrementBy(10))