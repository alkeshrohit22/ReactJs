import React from 'react';
import './css/AboutUs.css';
import bannerImage from "../AboutUs-Banner.jpg";

function AboutUs() {
    const employees = [
        {
            id: 1,
            name: "Mr.Rohit",
            role: "CEO",
            image: "/images/image-1.jpg"
        },
        {
            id: 2,
            name: "Mr.Ronaldo",
            role: "COO",
            image: "/images/image-2.jpg"
        },
        {
            id: 3,
            name: "Diya",
            role: "Manager",
            image: "/images/image-3.jpg"
        },
        {
            id: 4,
            name: "Rohan",
            role: "Developer",
            image: "/images/image-4.jpg"
        },
        {
            id: 5,
            name: "Manali",
            role: "Developer",
            image: "/images/image-5.jpg"
        }
    ];

    return (
        <>
            <div className="banner-class">
                <img src={bannerImage} alt="About Us Banner" className="about-us-banner"/>
            </div>
            <div className="about-us-container">
                <h2 className="about-us-title">About XOLO</h2>
                <p className="about-us-description">
                    Welcome to XOLO, your go-to online store for premium quality products! We are a brand committed to
                    delivering the best products to our customers at affordable prices. With a wide range of products
                    available, we aim to provide an unmatched shopping experience.
                </p>
                <p className="about-us-description">
                    At XOLO, we take pride in offering carefully curated collections that cater to the diverse needs of
                    our customers. Our products are sourced from trusted suppliers and go through rigorous quality checks to
                    ensure that they meet our high standards.
                </p>
                <p className="about-us-description">
                    We believe in exceptional customer service and strive to exceed our customers' expectations. If you
                    have any questions, feedback, or concerns, our friendly customer support team is always ready to assist
                    you. Thank you for choosing XOLO for all your shopping needs!
                </p>
                <div className="about-us-team">
                    <h3 className="about-us-team-title">Our Team</h3>
                    <div className="about-us-team-members">
                        {employees.map(employee => (
                            <div key={employee.id} className="about-us-team-member">
                                <img src={employee.image} alt={employee.name} className="about-us-team-member-image" />
                                <h4 className="about-us-team-member-name">{employee.name}</h4>
                                <p className="about-us-team-member-role">{employee.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="about-us-address">
                    <h3 className="about-us-address-title">Visit Our Store</h3>
                    <p className="about-us-address-description">
                        XOLO Store, 1234 Gandhi Street, New York, NY 12345
                    </p>
                    <p className="about-us-address-description">Phone: (555) 123-4567</p>
                    <p className="about-us-address-description">Email: info@xolobrand.com</p>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
