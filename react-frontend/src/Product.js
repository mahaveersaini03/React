import React from 'react'

export const Product = (props) => {
  return (
    <div className='product-main'>
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
        <button>Delet</button>
        <button>Edit</button>
        Product</div>
  )
}
export default Product
