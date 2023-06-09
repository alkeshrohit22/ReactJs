import React, { useState } from 'react';
import '../css/BillingForm.css';
import $ from 'jquery';

function BillingForm() {
    const [formData, setFormData] = useState({
        shippingFirstName: '',
        shippingLastName: '',
        shippingAddress: '',
        shippingApartment: '',
        shippingCity: '',
        shippingCountry: '',
        shippingZip: '',
        sameAddress: false,
        billingFirstName: '',
        billingLastName: '',
        billingAddress: '',
        billingApartment: '',
        billingCity: '',
        billingCountry: '',
        billingZip: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (event) => {
        const { name, value, checked, type } = event.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData({ ...formData, [name]: newValue });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validationBilling()) {
            const form = $(e.target);

            $.ajax({
                type: "POST",
                url: form.attr("action"),
                data: formData,
                success(data) {
                    window.location.href = '/paymentpage';
                },
            });
        }
    }

    const validationBilling = () => {
        const {
            shippingFirstName,
            shippingLastName,
            shippingAddress,
            shippingApartment,
            shippingCity,
            shippingCountry,
            shippingZip,
            billingFirstName,
            billingLastName,
            billingAddress,
            billingApartment,
            billingCity,
            billingCountry,
            billingZip
        } = formData;

        const zipCodeRegex = /^\d{6}$/; // Regex for 6-digit zip code
        const nameRegex = /^[A-Za-z]+$/; // Regex for alphabetic names
        const apartmentRegex = /^[A-Za-z0-9\s]+$/; // Regex for alphanumeric apartment names
        const cityRegex = /^[A-Za-z\s]+$/; // Regex for alphabetic city names
        const addressRegex = /^[A-Za-z0-9\s]+$/; // Regex for alphanumeric street address
        const countryRegex = /^[A-Za-z\s]+$/; // Regex for alphabetic country names

        if (!shippingFirstName || !shippingLastName || !shippingAddress || !shippingCity || !shippingCountry || !shippingApartment || !shippingZip) {
            alert("Please provide all shipping address information.");
            return false;
        }

        if (!nameRegex.test(shippingFirstName) || !nameRegex.test(shippingLastName)) {
            alert("Please provide valid first name and last name for shipping.");
            return false;
        }

        if (!apartmentRegex.test(shippingApartment)) {
            alert("Please provide a valid apartment name for shipping.");
            return false;
        }

        if (!addressRegex.test(shippingAddress)) {
            alert("Please provide a valid street address for shipping.");
            return false;
        }

        if (!cityRegex.test(shippingCity)) {
            alert("Please provide a valid city name for shipping.");
            return false;
        }

        if (!countryRegex.test(shippingCountry)) {
            alert("Please provide a valid country name for shipping.");
            return false;
        }

        if (!zipCodeRegex.test(shippingZip)) {
            alert("Please provide a valid 6-digit postal code for shipping.");
            return false;
        }

        // Check if billing address fields are filled out, if sameAddress is false
        if (!formData.sameAddress && (!billingFirstName || !billingLastName || !billingAddress || !billingCity || !billingCountry || !billingApartment || !billingZip)) {
            alert("Please provide all billing address information.");
            return false;
        }

        if (!formData.sameAddress && (!nameRegex.test(billingFirstName) || !nameRegex.test(billingLastName))) {
            alert("Please provide valid first name and last name for billing.");
            return false;
        }

        if (!formData.sameAddress && (!apartmentRegex.test(billingApartment))) {
            alert("Please provide a valid apartment name for billing.");
            return false;
        }

        if (!formData.sameAddress && (!addressRegex.test(billingAddress))) {
            alert("Please provide a valid street address for billing.");
            return false;
        }

        if (!formData.sameAddress && (!cityRegex.test(billingCity))) {
            alert("Please provide a valid city name for billing.");
            return false;
        }

        if (!formData.sameAddress && (!countryRegex.test(billingCountry))) {
            alert("Please provide a valid country name for billing.");
            return false;
        }

        if (!formData.sameAddress && (!zipCodeRegex.test(billingZip))) {
            alert("Please provide a valid 6-digit postal code for billing.");
            return false;
        }

        return true;
    };

    return (
        <>
            <div className="containerform">
                <form action="" method="post" name="myForm"
                      id="address-form"
                      className={'billing-form'}
                      method={"post"}
                      action={"http://localhost/ReactJs/phase-2/woo-commerce-backend/billingForm.php"}
                      onSubmit={handleSubmit}
                >
                    <fieldset>
                        <legend>Shipping Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingFirstName" id="shipping-first-name"
                                   value={formData.shippingFirstName || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingLastName" id="shipping-last-name"
                                   value={formData.shippingLastName || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingAddress" id="shipping-street-address"
                                   value={formData.shippingAddress || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shippingApartment" id="shipping-apt-address"
                                   value={formData.shippingApartment || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingCity" id="shipping-city"
                                   value={formData.shippingCity || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shippingZip" id="shipping-postal-code"
                                   value={formData.shippingZip || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="shippingCountry" list="shipping-country-list"
                                   name="shippingCountry"
                                   value={formData.shippingCountry || ''}
                                   onChange={handleChange}
                            />
                            <datalist id="shipping-country-list">
                                <option value="India"></option>
                                <option value="Switzerland"></option>
                                <option value="Germany"></option>
                                <option value="Canada"></option>
                                <option value="United States"></option>
                                <option value="Sweden"></option>
                                <option value="Japan"></option>
                                <option value="Australia"></option>
                                <option value="United Kingdom"></option>
                                <option value="Brazil"></option>
                                <option value="New-Zealand"></option>
                            </datalist>
                            <label htmlFor="shipping-country">Country</label>
                        </p>
                    </fieldset>
                    <input type="checkbox" name="sameAddress" id="same-address"
                           value={formData.sameAddress || false}
                           onChange={handleChange}
                    />
                    <label htmlFor="same-address">Billing Address is the Same as Shipping</label>
                    <fieldset>
                        <legend>Billing Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingFirstName" id="billing-first-name"
                                   value={formData.billingFirstName || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingLastName" id="billing-last-name"
                                   value={formData.billingLastName || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingAddress" id="billing-street-address"
                                   value={formData.billingAddress || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billingApartment" id="billing-apt-address"
                                   value={formData.billingApartment || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingCity" id="billing-city"
                                   value={formData.billingCity || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billingZip" id="billing-postal-code"
                                   value={formData.billingZip || ''}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="billing-country" list="billing-country-list"
                                   name="billingCountry"
                                   value={formData.billingCountry || ''}
                                   onChange={handleChange}
                            />
                            <datalist id="billing-country-list">
                                <option value="India"/>
                                <option value="Switzerland"/>
                                <option value="Germany"/>
                                <option value="Canada"/>
                                <option value="United States"/>
                                <option value="Sweden"/>
                                <option value="Japan"/>
                                <option value="Australia"/>
                                <option value="United Kingdom"/>
                                <option value="Brazil"/>
                                <option value="New-Zealand"/>
                            </datalist>
                            <label htmlFor="billing-country">Country</label>
                        </p>
                    </fieldset>
                    <p className="submit-wrap">
                        <button id="placeorderbtn" className="btn" type="submit">Place
                            Order &rarr;</button>
                    </p>
                </form>
            </div>
        </>
    );
}

export default BillingForm;
