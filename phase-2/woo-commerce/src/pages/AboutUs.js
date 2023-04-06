import React from 'react';
import './css/AboutUs.css';
import bannerImage from "../AboutUs-Banner.jpg"

function AboutUs() {
    return (
        <>
            <div className={'banner-class'}>
                <img src={bannerImage} alt="About Us Banner" className="about-us-banner"/>
            </div>
            <div className="about-us-container">
                <h2 className="about-us-title">About XOLO</h2>
                <p className="about-us-description">
                    Welcome to XOLO, your go-to online store for premium quality products! We are a brand committed to
                    delivering the best products to our customers at affordable prices. With a wide range of products
                    available, we
                    aim to provide an unmatched shopping experience.
                </p>
                <p className="about-us-description">
                    At XOLO, we take pride in offering carefully curated collections that cater to the diverse needs of
                    our
                    customers. Our products are sourced from trusted suppliers and go through rigorous quality checks to
                    ensure
                    that they meet our high standards.
                </p>
                <p className="about-us-description">
                    We believe in exceptional customer service and strive to exceed our customers' expectations. If you
                    have
                    any questions, feedback, or concerns, our friendly customer support team is always ready to assist
                    you.
                    Thank you for choosing XOLO for all your shopping needs!
                </p>
                <div className="about-us-address">
                    <h3 className="about-us-address-title">Visit Our Store</h3>
                    <p className="about-us-address-description">
                        XOLO Store, 1234 Example Street, New York, NY 12345
                    </p>
                    <p className="about-us-address-description">Phone: (555) 123-4567</p>
                    <p className="about-us-address-description">Email: info@xolobrand.com</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
