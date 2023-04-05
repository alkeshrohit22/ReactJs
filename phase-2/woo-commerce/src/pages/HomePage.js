import React from 'react'
import Banner from "./Homepage/Banner"
import SixBoxSection from "./Homepage/SixBoxSection";
import Products from './Homepage/Products';

function HomePage() {
    return (
        <>
            <Banner/>
            <SixBoxSection/>
            <Products/>
        </>
    )
}

export default HomePage