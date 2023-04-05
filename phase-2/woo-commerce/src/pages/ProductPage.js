import React from 'react'
import './css/ProductPage.css';
import Products from "./Homepage/Products";

function ProductPage() {
    return (
        <>
            <div className="blue_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="titlepage">
                                <h2>Featured Products</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<Products/>*/}
        </>
    );
}

export default ProductPage