import React,{useReducer} from 'react'

const initialState = 0
const reducer = (currentState,action) =>{
    switch (action){
        case 'add_1':
            return currentState + 1
        case 'multi':
            return currentState*3
        case 'reset':
            return initialState
        default:
            return currentState
        }
    }

const BasicReducer = () => {
    count [count,dispatch] = useReducer(reducer,initialState)
    return (
        <div>
            <div>Count {count}</div>
            <button onClick={()=>dispatch('add_1')}>ADD+1</button>
            <button onClick={()=>dispatch('multi')}>かける3</button>
            <button onClick={()=>dispatch('reset')}>リセット</button>
        </div>
    )
}

export default BasicReducer