export const addTodo =(todo)=>{
    return {
        type:'ADD_TODO',
        payload:todo
    }
}

export const removeTodo =(id)=>{
    return {
        type:'REMOVE_TODO',
        payload:id
    }
}

export const showTodo =(todo)=>{
    return {
        type:'SHOW',
        payload:todo
    }
}