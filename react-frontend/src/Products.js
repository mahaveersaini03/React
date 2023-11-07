import React from 'react'

const DUMMY_PRODUCTS = [
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-red-surface-1bBCtUAUMFI",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-red-surface-1bBCtUAUMFI",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-red-surface-1bBCtUAUMFI",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/a-close-up-of-a-cell-phone-on-a-red-surface-1bBCtUAUMFI",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
];
const Products = () => {
  return (
    <div className="main">
            <ul>
                {DUMMY_PRODUCTS.map((product,key) =>
                <li key={key={}}>

                    <Product id = {key} name = {product.name} image = {product.image} />
                </li>
                )
                
                }
            </ul>
      
    </div>
  )
}

export default Products
