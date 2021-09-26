import React from 'react'

import { connect } from 'react-redux'
import {increment, decrement , reset} from '../../actions/count'

function Btn(props){
    return (
        <div>
            <button onClick={()=>{
                props.dispatch(increment())
            }}>
                up
            </button>
            <button onClick={()=>{
                props.dispatch(decrement())
            }} >down</button>

            <button onClick={()=>{
                props.dispatch(reset())
            }} >reset</button>

        </div>
    )
}

export default connect()(Btn)