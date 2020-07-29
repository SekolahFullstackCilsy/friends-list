const productState = {
  price: 0,
  imageUrl: '',
  name: '',
  description: ''
}

const productReducer = (state = productState, action) => {
  switch(action.type) {
    case 'SET_PRODUCT':
      return {
        price: action.payload.price,
        imageUrl: action.payload.imageUrl,
        name: action.payload.name,
        description: action.payload.description
      }
    default:
      return state
  }
}

export default productReducer