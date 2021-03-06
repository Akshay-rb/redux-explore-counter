import axios from "axios"

export  const setUsers =(users)=>{
    return{
        type:'SET_USERS',
        payload:users
    } 
}

export const startSetUser =()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response=>{
                const users = response.data
                dispatch(setUsers(users))
            })
    }
}