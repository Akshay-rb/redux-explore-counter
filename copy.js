const configureStore = ()=>{
    const store = {
         state :{
            count: 0
        },
        getState:function(){
            return this.state
        },
        dispatch : function(action){
            switch(action.type){
                case 'INCREMENT':{
                    this.state.count++
                    return this.state
                }
            }
        }
    }
    return store
}

const store = configureStore()

store.dispatch({type:'INCREMENT'})
console.log(store.state)
