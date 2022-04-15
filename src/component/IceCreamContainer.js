import React from 'react'
import { buyIceCream } from '../redux'
// here using step3 to connect these two functions with our react component and for that we use the connect higher order component from react redux liberary
import { connect } from "react-redux"

function IceCreamContainer(props) {
  return (// here this receive num of cake as props to this from action creator
    <div>
      <h1> number of iceCreams-{props.numOfIceCream}</h1>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  )
}

// define function
const mapStateToProps = state => { // take state as parameter and return object and this is one function to define
  return {
    numOfIceCream: state.iceCream.numOfIceCream
    // here only one property present that is numofcakes and this is one step and selectors used this gives basic information of state from the redux store
  }
}

const mapDispatchToProps = dispatch => { // dispatch as parameter and return object and this is step2
  return {
    buyIceCream: () => dispatch(buyIceCream()) // this is which dispatch action creator from redux
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
// this connect function basically what the two function names specify  