const todoInitialState =[
    {
        id:Number(new Date()),
        title:'task 1'
    }
]
const todoReducer =(state = todoInitialState,action)=>{
        switch(action.type){
            case 'ADD_TODO':{
                return [...state , action.payload]
            }
            case 'REMOVE_TODO':{
                return state.filter(todo=> todo.id !== action.payload)
            }
            case 'SHOW':{
                // return state.map(todo=> {
                //     return <p key={todo.id} >{todo.id}</p>
                // })
                // return action.payload.id
            }
            default:{
                return [...state]
            }
        }
}

export default todoReducer