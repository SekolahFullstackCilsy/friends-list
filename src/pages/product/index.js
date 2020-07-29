import React from 'react'
import { connect } from 'react-redux'

const Product = (props) => {
  return (
    <div>
      <p>Nama user: {props.users.name}</p>
      <p>Product name: {props.products.name}</p>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users,
    products: state.products
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Product)