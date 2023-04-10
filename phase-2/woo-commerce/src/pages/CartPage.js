import React, { useState, useEffect } from 'react';
import './css/cartPage.css';

function CartPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Retrieve cartItems from localStorage
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            // Convert string to array and update cartItems state
            setCartItems(JSON.parse(storedCartItems));
        }
    }, []);

    // Function to calculate total number of items
    const calculateTotalItems = () => {
        let totalItems = 0;
        cartItems.forEach(product => {
            totalItems += product.quantity; // Add product quantity to total items
        });
        return totalItems;
    };

    // Function to calculate total price of all products
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(product => {
            totalPrice += product.price * product.quantity; // Multiply product price by quantity and add to total price
        });
        return totalPrice;
    };

    // Function to handle deletion of a product from cart
    const handleDelete = (productId) => {
        const updatedCartItems = cartItems.filter(product => product.id !== productId);
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Function to handle quantity increase
    const handleQuantityIncrease = (productId) => {
        const updatedCartItems = cartItems.map(product => {
            if (product.id === productId) {
                return { ...product, quantity: product.quantity + 1 }; // Increase quantity by 1
            }
            return product;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    // Function to handle quantity decrease
    const handleQuantityDecrease = (productId) => {
        const updatedCartItems = cartItems.map(product => {
            if (product.id === productId) {
                if (product.quantity > 1) {
                    return { ...product, quantity: product.quantity - 1 }; // Decrease quantity by 1, minimum quantity is 1
                }
            }
            return product;
        });
        setCartItems(updatedCartItems);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
    };

    return (
        <>
            <div className={'table-div'}>
                <h1 className={'table-div-h1'}> Cart Product List</h1>
                <table className={'table-div-table'}>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.length === 0 ? (
                        <tr>
                            <td colSpan="5">No products in cart.</td>
                        </tr>
                    ) : (
                        cartItems.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price} Rs</td>
                                <td>
                                    <button onClick={() => handleQuantityDecrease(product.id)}>
                                        -
                                    </button>
                                    {product.quantity}
                                    <button onClick={() => handleQuantityIncrease(product.id)}>
                                        +
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(product.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td colSpan="3">Total Items:</td>
                        <td>
                            <strong>{calculateTotalItems()} </strong>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="3">Total Price:</td>
                        <td>
                            <strong>{calculateTotalPrice()} Rs</strong>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td colSpan="3">
                            Go to Check Out Page
                        </td>
                        <td>
                            {cartItems.length === 0 ? (
                                <button className={'checkout-button'} disabled>
                                    Buy Now
                                </button>
                            ) : (
                                <button className={'checkout-button'}>
                                    <a href={'/CheckoutPage'}>Buy Now</a>
                                </button>
                            )}
                        </td>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
}

export default CartPage;
