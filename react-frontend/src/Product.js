import React from 'react'
import './Product.css';

export const Product = (props) => {
  return (
    <div className='product-main'>
      <div className='card'>

      <img src={ props.image} alt={props.name} />
        <h4>{props.name}</h4>
        <p>{props.price}</p>
        <p>{props.quantity}</p>
        <button>Delet</button>
        <button>Edit</button>
      </div>
      
        </div>
  )
}
export default Product
