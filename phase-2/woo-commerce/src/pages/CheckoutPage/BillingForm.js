import React, {useState} from 'react'
import '../css/BillingForm.css'
import '../js/BillingForm'
import axios from "axios";

function BillingForm() {
    const [formData, setFormData] = useState({
        shipingFirstName: "",
        shipingLastName: "",
        shipingStreet: "",
        shipingApp: "",
        shipingCity: "",
        shippingPosCode: "",
        shipingCountry: "",
        billingFirstName: "",
        billingLastName: "",
        billingStreet: "",
        billingApp: "",
        billingCity: "",
        billingPosCode: "",
        billingCountry: ""
    });

    let name, value;
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(prevFormData => ({...prevFormData, [name]: value}));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // axios.post('http://localhost:8888/api/user/save', formData)
        //     .then(function (response) {
        //         console.log(response.data);
        //     });
        // // Send form data to the backend server
        // axios.post('./billingForm.php', formData) // Replace with the URL of your PHP file
        //     .then((response) => {
        //         console.log(response.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    }
    return (
        <>
            <div className="containerform">
                <form action="" method="post" name="myForm"
                      id="address-form" className={'billing-form'}
                      onSubmit={handleSubmit}
                >
                    <fieldset>
                        <legend>Shipping Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingFirstName" id="shipping-first-name"
                                   value={formData.shippingFirstName}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingLastName" id="shipping-last-name"
                                   value={formData.shippingLastName}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingStreetAddress" id="shipping-street-address"
                                   value={formData.shippingStreetAddress}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shippingAptAddress" id="shipping-apt-address"
                                   value={formData.shippingAptAddress}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shippingCity" id="shipping-city"
                                   value={formData.shippingCity}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shippingPostalCode" id="shipping-postal-code"
                                   value={formData.shippingPostalCode}
                                   onChange={handleChange}
                            />
                            <label htmlFor="shipping-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="shippingCountry" list="shipping-country-list"
                                   name="shipping-country"
                                   value={formData.shippingCountry}
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
                    <input type="checkbox" name="" id="same-address"
                    />
                    <label htmlFor="same-address">Billing Address is the Same as Shipping</label>
                    <fieldset>
                        <legend>Billing Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingFirstName" id="billing-first-name"
                                   value={formData.billingFirstName}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingLastName" id="billing-last-name"
                                   value={formData.billingLastName}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingStreetAddress" id="billing-street-address"
                                   value={formData.billingStreetAddress}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billingAptAddress" id="billing-apt-address"
                                   value={formData.billingAptAddress}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billingCity" id="billing-city"
                                   value={formData.billingCity}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billingPostalCode" id="billing-postal-code"
                                   value={formData.billingPostalCode}
                                   onChange={handleChange}
                            />
                            <label htmlFor="billing-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="billing-country" list="billing-country-list" name="billingCountry"
                                   value={formData.billingCountry}
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
    )
}

export default BillingForm