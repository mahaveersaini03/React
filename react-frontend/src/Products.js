import React from 'react'
import Header from './Header';
import Product  from './Product';
import './Products.css';

const DUMMY_PRODUCTS = [
    {
        name: "Mobile Phone",
        image : "./images/phone.jpg",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/black-iphone-5-on-brown-wooden-table-A6qNzfJXRGQ",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/black-iphone-5-on-brown-wooden-table-A6qNzfJXRGQ",
        price: 2000,
        description: "This is new mobile phone",
        quantity : 12,
    },
    {
        name: "Mobile Phone",
        image : "https://unsplash.com/photos/black-iphone-5-on-brown-wooden-table-A6qNzfJXRGQ",
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
                <li key={key}>

                    <Product id = {key} name = {product.name} image = {product.image} price = {product.price} description = {product.description} quantity = {product.quantity} />
                </li>
                )
                
                }
            </ul>
      
    </div>
  )
}

export default Products
