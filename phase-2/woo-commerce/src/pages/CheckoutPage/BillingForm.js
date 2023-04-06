import React from 'react'
import '../css/BillingForm.css'
import '../js/BillingForm'

function BillingForm() {
    return (
        <>
            <div className="containerform">
                <form action="" method="post" name="myForm" id="address-form" className={'billing-form'}>
                    <fieldset>
                        <legend>Shipping Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shipping-first-name" id="shipping-first-name"/>
                            <label htmlFor="shipping-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shipping-last-name" id="shipping-last-name"/>
                            <label htmlFor="shipping-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shipping-street-address" id="shipping-street-address"/>
                            <label htmlFor="shipping-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shipping-apt-address" id="shipping-apt-address"/>
                            <label htmlFor="shipping-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="shipping-city" id="shipping-city"/>
                            <label htmlFor="shipping-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="shipping-postal-code" id="shipping-postal-code"/>
                            <label htmlFor="shipping-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="shipping-country" list="shipping-country-list"
                                   name="shipping-country"/>
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
                    <input type="checkbox" name="" id="same-address"/>
                    <label htmlFor="same-address">Billing Address is the Same as Shipping</label>
                    <fieldset>
                        <legend>Billing Address</legend>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billing-first-name" id="billing-first-name"/>
                            <label htmlFor="billing-first-name">First Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billing-last-name" id="billing-last-name"/>
                            <label htmlFor="billing-last-name">Last Name</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billing-street-address" id="billing-street-address"/>
                            <label htmlFor="billing-street-address">Street Address</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billing-apt-address" id="billing-apt-address"/>
                            <label htmlFor="billing-apt-address">Apt/Suite</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" name="billing-city" id="billing-city"/>
                            <label htmlFor="billing-city">City</label>
                        </p>
                        <p className="input-wrapper lg-third">
                            <input type="text" name="billing-postal-code" id="billing-postal-code"/>
                            <label htmlFor="billing-postal-code">Postal Code</label>
                        </p>
                        <p className="input-wrapper lg-half">
                            <input type="text" id="billing-country" list="billing-country-list" name="billing-country"/>
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
                        <button id="placeorderbtn" className="btn" type="submit" onClick="validationForm()">Place
                            Order &rarr;</button>
                    </p>
                </form>
            </div>
        </>
    )
}

export default BillingForm