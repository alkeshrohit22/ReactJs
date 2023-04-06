import React, {useState, useEffect} from 'react';
import '../css/Products.css'

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
                console.log('if part');
                // Update quantity of existing item
                return prevCartItems.map(item => {
                    if (item.id === product.id) {
                        // console.log([{...item, quantity: item.quantity + 1}])
                        setCartItems([{...item, quantity: item.quantity + 1}])
                        return {...item, quantity: item.quantity + 1};
                    }
                    // console.log(item);
                    setCartItems([item]);
                    return item;

                });
            } else {
                // Add new item to cart
                // console.log([...prevCartItems, {...product, quantity: 1}])
                setCartItems([...prevCartItems, {...product, quantity: 1}]);
                return [...prevCartItems, {...product, quantity: 1}];
            }
        });
    };


    return (
        <>
            {product.map((pro) => (
                <div className="project_box " key={pro.id}>
                    <div className="dark_white_bg"><img src={pro.image}/></div>
                    <h3>{pro.title}<br/> <strong>{pro.price}</strong></h3>
                    <button onClick={() => addToCart(pro)}>Add to Cart</button>
                </div>
            ))}

            {/* Render cart items */}
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.title} x {item.quantity}</p>
                    <p>Price: {item.price}</p>
                </div>
            ))}
        </>
    );
}

export default ProductPageList