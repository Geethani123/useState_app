import React from 'react'
import { connect } from "react-redux"
import { buyCake, buyIceCream } from '../redux'


function ItemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy Items</button>

    </div>
  )
}

const mapStateToProps = (state, ownProps) => {// second parameter is props by convention it is reffered as ownProps, it means that this map function tells the state is passed to component as props and also if you want you can also pass this own props to component
  const itemstate = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCream
  return {
    item: itemstate
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispachFunction = ownProps.cake ?
    () => dispatch(buyCake())
    : () => dispatch(buyIceCream())

  return {
    buyItem: dispachFunction
  }

}

export default connect(null, mapDispatchToProps)(ItemContainer) // here we dispatching props not state so in place of mapStateToProps replace it as null 