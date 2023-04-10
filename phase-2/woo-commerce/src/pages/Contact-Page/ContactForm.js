import React, {useState} from 'react';
import '../css/ContacatForm.css'
import {FcHome, FcPhoneAndroid} from "react-icons/fc";
import {MdMarkEmailRead} from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import $ from 'jquery'

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = validationContactUs();
        if(isValid) {
            const form = $(e.target);
            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: form.serialize(),
                success(data) {
                   alert("Thank you!!!")
                },
            });
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const validationContactUs = () => {
        const { name, email, subject, message } = formData;
        let isValid = true;
        const newErrors = {};

        // Validate name
        if (name.trim() === '') {
            isValid = false;
            newErrors.name = 'Please enter your name';
        }

        // Validate email
        if (email.trim() === '') {
            isValid = false;
            newErrors.email = 'Please enter your email';
        } else if (!validateEmail(email)) {
            isValid = false;
            newErrors.email = 'Please enter a valid email address';
        }

        // Validate subject
        if (subject.trim() === '') {
            isValid = false;
            newErrors.subject = 'Please enter a subject';
        }

        // Validate message
        if (message.trim() === '') {
            isValid = false;
            newErrors.message = 'Please enter a message';
        }

        setErrors(newErrors);
        return isValid;
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };



    return (
        <>
            <section className="ftco-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="wrapper">
                                <div className="row no-gutters">
                                    <div className="col-lg-8 col-md-7 order-md-last d-flex align-items-stretch">
                                        <div className="contact-wrap w-100 p-md-5 p-4">
                                            <h3 className="mb-4">Get in touch</h3>
                                            <div id="form-message-warning" className="mb-4"></div>
                                            <div id="form-message-success" className="mb-4">
                                                Your message was sent, thank you!
                                            </div>
                                            <form
                                                method="post"
                                                action={"http://localhost/ReactJs/phase-2/woo-commerce-backend/ContactUs.php"}
                                                id="contactForm"
                                                name="contactForm"
                                                className="contactForm"
                                                onSubmit={handleSubmit}
                                            >
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="name">Full Name</label>
                                                            <input type="text"
                                                                   className="form-control"
                                                                   name="name"
                                                                   id="name"
                                                                   placeholder="Name"
                                                                   value={formData.name}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="email">Email Address</label>
                                                            <input type="email" className="form-control" name="email"
                                                                   id="email" placeholder="Email"
                                                                   value={formData.email}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="subject">Subject</label>
                                                            <input type="text" className="form-control" name="subject"
                                                                   id="subject"
                                                                   placeholder="Subject"
                                                                   value={formData.subject}
                                                                   onChange={handleChange}
                                                                   required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label className="label" htmlFor="#">Message</label>
                                                            <textarea name="message" className="form-control" id="message"
                                                                      cols="30" rows="4"
                                                                      placeholder="Message"
                                                                      value={formData.message}
                                                                      onChange={handleChange}
                                                                      required
                                                            ></textarea>
                                                            <div className="error">{errors.message}</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <input type="submit" value="Send Message"
                                                                   className="btn btn-primary"/>
                                                            <div className="submitting"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 d-flex align-items-stretch">
                                        <div className="info-wrap bg-primary w-100 p-md-5 p-4">
                                            <h3>Let's get in touch</h3>
                                            <p className="mb-4">We're open for any suggestion or just to have a chat</p>
                                            <div className="dbox w-100 d-flex align-items-start">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span><FcHome/></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Address:</span> XOLO Store, 1234 Example Street, New York, NY 12345</p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span><FcPhoneAndroid/></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Phone:</span> <a href="tel://1234567920">(555) 123-4567</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span><MdMarkEmailRead/></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Email:</span> <a
                                                        href="mailto:info@yoursite.com"> info@xolobrand.com</a></p>
                                                </div>
                                            </div>
                                            <div className="dbox w-100 d-flex align-items-center">
                                                <div className="icon d-flex align-items-center justify-content-center">
                                                    <span><CgWebsite/></span>
                                                </div>
                                                <div className="text pl-3">
                                                    <p><span>Website:</span> <a href="#">www.xolo.com</a></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ContactForm