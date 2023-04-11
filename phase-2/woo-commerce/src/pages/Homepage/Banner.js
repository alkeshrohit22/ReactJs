import React from 'react'
import '../css/Banner.css'

function Banner() {
    return (
        <section className="banner_main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div className="text-bg">
                            <h1><span className="blodark"> XOLO </span> <br/>Trands 2023</h1>
                            <p>A huge fashion collection for ever </p>
                            <a className="read_more" href="/productpage">Shop now</a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="ban_img">
                            <figure><img src={'../../../images/ban_img.png'} alt="#"/></figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner