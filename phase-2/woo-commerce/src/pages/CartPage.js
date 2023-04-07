import React, {useState, useEffect} from 'react';
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
        return cartItems.length;
    };

    // Function to calculate total price of all products
    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartItems.forEach(product => {
            totalPrice += product.price; // Add product price to total price
        });
        return totalPrice;
    };

    // Function to handle deletion of a product from cart
    const handleDelete = (productId) => {
        const updatedCartItems = cartItems.filter(product => product.id !== productId);
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
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.length === 0 ? (
                        <tr>
                            <td colSpan="4">No products in cart.</td>
                        </tr>
                    ) : (
                        cartItems.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.title}</td>
                                <td>{product.price} Rs</td>
                                <td>
                                    <button onClick={() => handleDelete(product.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2">Total Items:</td>
                        <td>
                            <strong>{calculateTotalItems()} Rs</strong>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total Price:</td>
                        <td>
                            <strong>{calculateTotalPrice()} Rs</strong>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
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
