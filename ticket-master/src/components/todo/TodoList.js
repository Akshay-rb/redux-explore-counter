import React from 'react'
import {connect} from 'react-redux'

import {addTodo, removeTodo, showTodo} from '../../actions/todo'

function TodoList(props){
    return(
        <div>
            <h2>listing tasks -{props.todo.length}</h2>
            <ul>
                {props.todo.map(todo=>{
                    return <li key={todo.id}>{todo.title} <button onClick={()=>{props.dispatch(removeTodo(todo.id))}} >remove</button> 
                    
                    {/* <button onClick={()=>{
                        props.dispatch(showTodo(todo))
                    }}>show</button> */}
                    </li>
                    
                })}
            </ul>
            <button onClick={()=>{
                const title = window.prompt('Enter a todo task')
                const todo = {
                    id: Number(new Date()),
                    title
                }
                props.dispatch(addTodo(todo))
            }} >Add task</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return{
        todo:state.todo
    }
}

export default connect(mapStateToProps)(TodoList)