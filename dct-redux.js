const configureStore =()=>{
    const store={
        state:{
            count:0
        },
        getState:function(){
            return this.state
        },
        dispatch: function(action){
            switch(action.type){
                case 'INCREMENT':{
                    this.state.count++
                    return this.state
                }
                case 'DECREMENT':{
                    this.state.count--
                    return this.state
                }
                case 'INCREMENT_BY':{
                    this.state.count += action.payload
                    return this.state
                }
                case 'RESET':{
                    this.state.count =0
                    return this.state
                }
                case 'SETTO':{
                    this.state.count = action.payload
                }
                default : {
                    return this.state
                }

            }
        }
    }
    return store
}

// action generators || action creators
// regular javascript functions that return an object which we call action

const increment =()=>{
    return {
        type:'INCREMENT'
    }
}

const decrement = ()=>{
    return {
        type:'DECREMENT'
    }
}

const incrementBy =(value)=>{
    return {
        type: 'INCREMENT_BY',
        payload:value
    }
}

const reset =()=>{
    return{
        type:'RESET'
    }
}

const setTo =(value)=>{
    return{
        type:'SETTO',
        payload:value
    }
}

const store = configureStore()

// console.log(store.getState())

// increment
// store.dispatch({type:'INCREMENT'})
store.dispatch(increment())
console.log(store.state)

//increment
store.dispatch(increment())
console.log(store.state)

//incrementBy
store.dispatch(incrementBy(5))
console.log(store.state)

//decrement
store.dispatch(decrement())
console.log(store.state);

//reset to 0
store.dispatch(reset())
console.log(store.state)

//setTo -
store.dispatch(setTo(10))
console.log(store.state) 