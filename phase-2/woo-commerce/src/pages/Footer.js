import React from "react";
import './css/Footer.css';
import { AiFillInstagram } from 'react-icons/ai';
import {FaTwitter} from 'react-icons/fa';
import {FaWhatsappSquare} from 'react-icons/fa';
import {RiFacebookBoxFill} from 'react-icons/ri';
import {CgWebsite} from 'react-icons/cg';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="inror_box">
                                <h3>INFORMATION </h3>

                                <span>XOLO - The Brand</span><br />
                                <blockquote>"Where E-commerce Meets Simplicity."</blockquote>
                                <span>Owner : @xolo</span>
                                <p>Partnership With : </p>
                                <ul>
                                    <li><a href={'#'}>@amazon</a></li>
                                    <li><a href={'#'}>@flipcart</a></li>
                                    <li><a href={'#'}>@Ajio</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="inror_box">
                                <h3>ABOUT </h3>
                                <span>Innovate Your Digital Lifestyle</span>
                                <p>At Xolo, we offer cutting-edge technology products including smartphones, laptops,
                                    tablets, and accessories. Our products are designed with a focus on quality, performance,
                                    and user experience.
                                </p>
                            </div>
                        </div>

                        <div className="col-md-3">
                            <div className="inror_box">
                                <h3>CONTACTS </h3>

                                <p>Phone : (555)-1234567</p>
                                <p>Email : info@xolobrand.com</p>
                                <p>Social Media : @instagram</p>
                                <p>Website : www.xolo.com</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="inror_box">
                                <h3>MY ACCOUNT </h3>

                                <span>Follow us on    </span>
                                <ul>
                                    <li><a href={'https://www.instagram.com/'}>< AiFillInstagram />&nbsp;  Instagram</a></li>
                                    <li><a href={'https://www.facebook.com/'}>< RiFacebookBoxFill />&nbsp;Facebook</a></li>
                                    <li><a href={'https://www.twitter.com/'}>< FaTwitter />&nbsp;Twitter</a></li>
                                    <li><a href={'https://web.whatsapp.com/'}>< FaWhatsappSquare />&nbsp;WhatsApp</a></li>
                                    <li><a href={'https://www.xolo.com'}>< CgWebsite />&nbsp;XOLO</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>© 2023 All Rights Reserved. Design by<a href="#"> Alkesh Rohit</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;