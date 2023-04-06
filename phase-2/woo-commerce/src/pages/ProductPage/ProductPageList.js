import React, {useState, useEffect} from 'react';
import CartPage from "../CartPage";
import '../css/Products.css'
import '../css/ProductListing.css'

function ProductPageList() {
    // const [data, setData] = useState(null);
    const [product, setproduct] = useState([])
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Make an HTTP GET request to fetch the JSON file
                const response = await fetch('../../../product.json');
                // Check if the response is successful
                if (response.ok) {
                    // Parse the response body as JSON
                    const jsonData = await response.json();
                    // Update the state with the fetched data
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
    //add to cart function
    const addToCart = (product) => {
        setCartItems(prevCartItems => {
            const existingItem = prevCartItems.find(item => item.id === product.id);
            if (existingItem) {
                // Update quantity of existing item
                return prevCartItems.map(item => {
                    if (item.id === product.id) {
                        // props.onAddToCart({...item, quantity: item.quantity + 1})
                        return {...item, quantity: item.quantity + 1};
                    }
                    // props.onAddToCart({item})
                    return item;

                });
            } else {
                // props.onAddToCart([...prevCartItems, {...product, quantity: 1}])
                return [...prevCartItems, {...product, quantity: 1}];
            }
        });
    };


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
            <CartPage addToCart={addToCart} cartItems={cartItems}/>
        </>
    );
}

export default ProductPageList
