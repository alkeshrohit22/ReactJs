import React from 'react'
import ProductPageList from "./ProductPage/ProductPageList";

function CartPage() {
    const handleAddToCart = (product) => {
        // Access the return value of addToCart here
        console.log('Product added to cart:', product);
    };
    return (
        <>
            <ProductPageList onAddToCart={handleAddToCart}/>
        </>
    )
}

export default CartPage
