import React from 'react'
import { buyCake } from '../redux'
// here using step3 to connect these two functions with our react component and for that we use the connect higher order component from react redux liberary
import { connect } from "react-redux"

function CakeContainer(props) {
  return (// here this receive num of cake as props to this from action creator
    <div>
      <h1> number of Cakes-{props.numOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

// define function
const mapStateToProps = state => { // take state as parameter and return object and this is one function to define and second parameter as a props
  return {
    numOfCakes: state.cake.numOfCakes
    // here only one property present that is numofcakes and this is one step and selectors used this gives basic information of state from the redux store
  }
}

const mapDispatchToProps = dispatch => { // dispatch as parameter and return object and this is step2
  return {
    buyCake: () => dispatch(buyCake()) // this is which dispatch action creator from redux



  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)
// this connect function basically what the two function names specify  