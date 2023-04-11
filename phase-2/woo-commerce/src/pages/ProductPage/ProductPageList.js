import React, {useState, useEffect, useCallback} from 'react';
import '../css/Products.css'
import '../css/ProductListing.css'

function ProductPageList() {
    // const [data, setData] = useState(null);
    const [product, setproduct] = useState([])
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('../../../product.json');
                if (response.ok) {
                    const jsonData = await response.json();
                    setproduct(jsonData);
                } else {
                    console.error('Error fetching product data:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchData();
    }, []);

    const addToCart = useCallback((product) => {
        try {
            if(window.confirm("Sure! Want to add?")){
                // Get the existing cart items from local storage
                const cartItemsFromStorage = localStorage.getItem('cartItems');
                let cartItems = [];

                // If there are existing cart items, parse them from JSON
                if (cartItemsFromStorage) {
                    cartItems = JSON.parse(cartItemsFromStorage);
                }

                // Check if the selected product already exists in the cart
                const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

                if (existingProductIndex !== -1) {
                    // If the product already exists, increment its quantity
                    cartItems[existingProductIndex].quantity += 1;
                } else {
                    // If the product does not exist, add it to the cart items array with a quantity of 1
                    const newProduct = {
                        ...product,
                        quantity: 1
                    };
                    cartItems.push(newProduct);
                }

                // Update the cart items in local storage
                localStorage.setItem('cartItems', JSON.stringify(cartItems));

                // Update the state with the new cart items
                setCartItems(cartItems);

            } else {
                console.log("Not Want to add!!!");
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    }, []);


    useEffect(() => {
        // Fetch cart items from local storage on component mount
        const cartItemsFromStorage = localStorage.getItem('cartItems');
        if (cartItemsFromStorage) {
            const parsedCartItems = JSON.parse(cartItemsFromStorage);
            setCartItems(parsedCartItems);
        }
    }, []);



    return (
        <>
            <div id="project" className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="product_main">
                            {product.map((pro) => (
                                <div className="project_box " key={pro.id}>
                                    <div className="dark_white_bg"><img src={pro.image}/></div>
                                    <h3>{pro.title}<br/> <strong>{pro.price} Rs</strong></h3>
                                    <button onClick={() => addToCart(pro)}>Add to Cart</button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPageList
