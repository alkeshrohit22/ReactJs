function validationForm() {

    var ship_first_name, ship_last_name, ship_street_add, ship_apt_add, ship_city, ship_pin, ship_country;
    var bil_first_name, bil_last_name, bil_street_add, bil_apt_add, bil_city, bil_pin, bil_country;

    ship_first_name = document.forms["myForm"]["shipping-first-name"].value;
    ship_last_name = document.forms["myForm"]["shipping-last-name"].value;
    ship_street_add = document.forms["myForm"]["shipping-street-address"].value;
    ship_apt_add = document.forms["myForm"]["shipping-apt-address"].value;
    ship_city = document.forms["myForm"]["shipping-city"].value;
    ship_pin = document.forms["myForm"]["shipping-postal-code"].value;
    ship_country = document.forms["myForm"]["shipping-country"].value;

    bil_first_name = document.forms["myForm"]["billing-first-name"].value;
    bil_last_name = document.forms["myForm"]["billing-last-name"].value;
    bil_street_add = document.forms["myForm"]["billing-street-address"].value;
    bil_apt_add = document.forms["myForm"]["billing-apt-address"].value;
    bil_city = document.forms["myForm"]["billing-city"].value;
    bil_pin = document.forms["myForm"]["billing-postal-code"].value;
    bil_country = document.forms["myForm"]["billing-country"].value;


    // console.log(ship_first_name);
    // console.log(ship_last_name);
    // console.log(ship_street_add);
    // console.log(ship_apt_add);
    // console.log(ship_city);
    // console.log(ship_pin);
    // console.log(ship_country);


    // First name Validation
    var regName = /^[a-zA-Z]+$/;
    if (ship_first_name === "" || ship_first_name === null) {
        alert("Please Enter Your First Name for Shipping!!!");
        // document.forms["myForm"]["shipping-first-name"].focus();
        return false;
    }
    if ((ship_first_name.length <= 2) || (ship_first_name.length > 15)) {
        alert("To Less/Much Character in first name for Shipping!!!");
        return false;
    }
    if (!regName.test(ship_first_name)) {
        alert('Invalid first name given in Shipping.');
        return false;
    }

    // Last name Validation
    if (ship_last_name === "" || ship_last_name === null) {
        alert("Must Enter last Name in Form for Shipping!!!");
        return false;
    }
    if ((ship_last_name.length <= 2) || (ship_last_name.length > 15)) {
        alert("To Less/Much Character in last name for Shipping!!!");
        return false;
    }
    if (!regName.test(ship_last_name)) {
        alert('Invalid last name given for Shipping!!!');
        return false;
    }

    // Street Address Validation
    if (ship_street_add === "" || ship_street_add === null) {
        alert("Street Address is must for Shipping!!!");
        return false;
    }

    // Street Apartment Validation
    if (ship_apt_add === "" || ship_apt_add === null) {
        alert("Street Apartment Address is must for Shipping!!!");
        return false;
    }

    // City Validation
    if (ship_city === "" || ship_city === null) {
        alert("City name is must for Shipping!!");
        return false;
    }

    // Zip Code Validation
    if (ship_pin === null || ship_pin === "") {
        alert("Must Enter Pincode for shipping!!!");
        return false;
    }
    if (!/^[0-9]+$/.test(ship_pin)) {
        alert("Enter Numberical value only for Shipping!!!");
        return false;
    }
    if (ship_pin.length < 5 || ship_pin.length > 6) {
        alert('Enter proper Pincode please!!!');
        return false;
    }

    //Country Validation
    if (ship_country === null || ship_country === "") {
        alert("Must Enter Country for Shipping!!!");
        return false;
    }

    var ship_bil_value = document.getElementById("same-address");

    if (ship_bil_value.checked === true) {
        bil_first_name = ship_first_name;
        bil_last_name = ship_last_name;
        bil_street_add = ship_street_add;
        bil_apt_add = ship_apt_add;
        bil_city = ship_city;
        bil_pin = ship_pin;
        bil_country = ship_country;

    } else {

        // First name Validation
        var regName = /^[a-zA-Z]+$/;
        if (bil_first_name === "" || bil_first_name === null) {
            alert("Please Enter Your First Name for Billing!!!");
            return false;
        }
        if ((bil_first_name.length <= 2) || (bil_first_name.length > 15)) {
            alert("To Less/Much Character in first name for Billing!!!");
            return false;
        }
        if (!regName.test(bil_first_name)) {
            alert('Invalid first name given for Billing.');
            return false;
        }

        // Last name Validation
        if (bil_last_name === "" || bil_last_name === null) {
            alert("Must Enter last Name in Form for Billing!!!");
            return false;
        }
        if ((bil_last_name.length <= 2) || (bil_last_name.length > 15)) {
            alert("To Less/Much Character in last name for Billing!!!");
            return false;
        }
        if (!regName.test(bil_last_name)) {
            alert('Invalid last name given for Billing!!!');
            return false;
        }

        // Street Address Validation
        if (bil_street_add === "" || bil_street_add === null) {
            alert("Street Address is must for Billing!!!");
            return false;
        }

        // Street Apartment Validation
        if (bil_apt_add === "" || bil_apt_add === null) {
            alert("Street Apartment Address is must for Billing!!!");
            return false;
        }

        // City Validation
        if (bil_city === "" || bil_city === null) {
            alert("City name is must for Billing!!");
            return false;
        }

        // Zip Code Validation
        if (bil_pin === null || bil_pin === "") {
            alert("Must Enter Pincode for Billing!!!");
            return false;
        }
        if (!/^[0-9]+$/.test(bil_pin)) {
            alert("Enter Numberical value only for Billing!!!");
            return false;
        }
        if (bil_pin.length < 5 || bil_pin.length > 6) {
            alert('Enter proper Pincode please!!!');
            return false;
        }

        //Country Validation
        if (bil_country === null || bil_country === "") {
            alert("Must Enter Country for Billing!!!");
            return false;
        }
    }
}


// // label up and down using javascript
// var inputs = document.querySelectorAll('input[type="text"]');
// var form = document.getElementById('address-form');
//
// function labelUp(input) {
//     var _this = input;
//     if (_this.classList.contains('open')) {
//         return;
//     }
//     _this.classList.add('open');
// }
//
// function labelDown(input) {
//     var _this = input;
//     if (_this.classList.contains('open') && !_this.value) {
//         _this.classList.remove('open');
//     }
// }
//
// form.addEventListener('input', function (e) {
//     if (e.target.tagName === "INPUT") {
//         labelUp(e.target);
//     }
// }, false);
//
// for (var i = 0, l = inputs.length; i < l; i++) {
//     inputs[i].addEventListener('blur', function (e) {
//         labelDown(e.target);
//     }, false);
// }

