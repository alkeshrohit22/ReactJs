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
            billingZip,
            email,
            phoneNumber
        } = formData;

        if (!shippingFirstName || !shippingLastName || !shippingAddress || !shippingCity || !shippingCountry || !shippingZip || !shippingApartment) {
            alert("Please provide all shipping address information.");
            return false;
        }

        // Check if billing address fields are filled out, if sameAddress is false
        if (!formData.sameAddress && (!billingFirstName || !billingLastName || !billingAddress || !billingCity || !billingCountry || !billingZip || !billingApartment)) {
            alert("Please provide all billing address information.");
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
