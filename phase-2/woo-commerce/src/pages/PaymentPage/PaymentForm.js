import React, { useState } from 'react'
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import '../css/PaymentForm.css'


function PaymentForm() {
    const [cvv, setCvv] = useState('');
    const [expiry, setExpiry] = useState('');
    const [focus, setFocus] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('')

    const handleInputFocus = (e) => {
        setFocus(e.target.name);
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;

        if(name === 'name') {
            setName(value);
        } else if (name === 'number') {
            setNumber(value);
        } else if(name === 'expiry') {
            setExpiry(value);
        } else if (name == 'cvv') {
            setCvv(value);
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        if(valdiationForm()) {
            localStorage.clear();
            window.location.href('/productpage');
        }
    }

    const valdiationForm = () => {
        let nameReg = /^[A-Za-z\s]+$/;
        let cvvReg = /^\d{3}$/

        if(number.length > 16) {
            setError('You Enter more card number! This is not valid!!!');
            return false;
        }
        if(number.length < 16) {
            setError('You Enter less card number! This is not valid!!!');
            return false;
        }
        if(!(nameReg.test(name))) {
            setError('please enter valid name!!!');
            return false;
        }
        if(!(cvvReg).test(cvv)) {
            setError('please enter valid cvv number');
            return false;
        }
        return true;
    }
    

  return (
    <div id="PaymentForm" className={'container-payment'}>
        <h2 className={'container-heading'}>Payment method</h2>
        <Cards
          cvc={cvv}
          expiry={expiry}
          focused={focus}
          name={name}
          number={number}
        />
        <form
         onSubmit={submitForm}
        >
        	<input
            type="number"
            name="number"
            placeholder="Card Number"
            value={number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            maxLength={16}
            minLength={16}
            required
            /><br />
            <input
                type="tel"
                name="name"
                placeholder="Name"
                value={name}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
            /><br />
            <input
                type="month"
                name="expiry"
                placeholder="month/date"
                value={expiry}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                required
            /><br />
            <input
                type="tel"
                name="cvv"
                placeholder="CVC"
                value={cvv}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                minLength={3}
                maxLength={3}
                required
            /><br />
            {error && <div className="error">{error}</div>}
            <input
             type={'submit'}
             value={'Buy Now'}
            />
        </form>
      </div>
  )
}

export default PaymentForm