import React from 'react'
import {connect} from 'react-redux'

import Btn from './Btn'


function Count(props){
    console.log('props are',props)
    return(
        <div>
            {/* <h2>Count- value goes here</h2> */}
            <h2>Count - {props.count}</h2>
            <Btn/>

        </div>
    )
}

// higher order component - a function.component that takes another component as arg or returns a component

// returned component from a HOC is called Wrapped component 

const mapStateToProps =(state)=>{
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(Count)