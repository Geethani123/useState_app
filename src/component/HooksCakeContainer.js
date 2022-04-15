import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { buyCake } from '../redux'

function HooksCakeContainer() {
  const numOfCakes = useSelector(state => state.cake.numOfCakes)
  // this hook accept a function as its parameter this function is called as the selector function receive redux state as argument
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Number of cakes- {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}> Buy cake</button>

    </div >
  )
}

export default HooksCakeContainer

// useselector=it is hook react redux library provides which acts as a closed equivalent to map state to props function we have already seen, hold of any state that is maintained in the redux store we use the useselector hook