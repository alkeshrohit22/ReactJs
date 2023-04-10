<?php

include_once ('connection.php');

$shipingFirstName = "";
$shipingLastName = "";
$shipingStreet = "";
$shipingApp = "";
$shipingCity = "";
$shippingPosCode = "";
$shipingCountry = "";

$sameAddress = '';

$billingFirstName = "";
$billingLastName = "";
$billingStreet = "";
$billingApp = "";
$billingCity =  "";
$billingPosCode = "";
$billingCountry = "";

if($_SERVER["REQUEST_METHOD"] == "POST") {
    $shippingFirstName = $_POST['shippingFirstName'];
    $shippingLastName = $_POST['shippingLastName'];
    $shippingStreet = $_POST['shippingAddress'];
    $shippingApp = $_POST['shippingApartment'];
    $shippingCity = $_POST['shippingCity'];
    $shippingPosCode = $_POST['shippingZip'];
    $shippingCountry = $_POST['shippingCountry'];

    $sameAddress = $_POST['sameAddress'];

    if($sameAddress === 'true') {
        $billingFirstName = $shippingFirstName;
        $billingLastName = $shippingLastName;
        $billingStreet = $shippingStreet;
        $billingApp = $shippingApp;
        $billingCity =  $shippingCity;
        $billingPosCode = $shippingPosCode;
        $billingCountry = $shippingCountry;
    } else {
        $billingFirstName = $_POST['billingFirstName'];
        $billingLastName = $_POST['billingLastName'];
        $billingStreet = $_POST['billingAddress'];
        $billingApp = $_POST['billingApartment'];
        $billingCity = $_POST['billingCity'];
        $billingPosCode = $_POST['billingZip'];
        $billingCountry = $_POST['billingCountry'];
    }
    //    remove unwanted space
    $shippingFirstName = test_input($shippingFirstName);
    $shippingLastName = test_input($shippingLastName);
    $shippingStreet = test_input($shippingStreet);
    $shipingApp = test_input($shippingApp);
    $shippingCity = test_input($shippingCity);
    $shippingPosCode = test_input($shippingPosCode);
    $shippingCountry = test_input($shippingCountry);
    $billingFirstName = test_input($billingFirstName);
    $billingLastName = test_input($billingLastName);
    $billingStreet = test_input($billingStreet);
    $billingApp = test_input($billingApp);
    $billingCity = test_input($billingCity);
    $billingPosCode = test_input($billingPosCode);
    $billingCountry = test_input($billingCountry);

    try {
        $DBsql = 'CREATE DATABASE IF NOT EXISTS xolo';
        $conn->exec($DBsql);

        $conn->query('use xolo');

        $tableSql = "CREATE TABLE IF NOT EXISTS billing_form (
            id INT(20) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            shipping_first_name VARCHAR(25),
            shipping_last_name VARCHAR(25),
            shipping_street VARCHAR(50),
            shipping_appartment VARCHAR(50),
            shipping_city VARCHAR(25),
            shipping_post_code VARCHAR(6),
            shipping_country VARCHAR(25),
            billing_first_name VARCHAR(25),
            billing_last_name VARCHAR(25),
            billing_street VARCHAR(50),
            billing_appartment VARCHAR(50),
            billing_city VARCHAR(25),
            billing_post_code VARCHAR(25),
            billing_country VARCHAR(25)
            )";

        $conn->exec($tableSql);

        // insert post data into table
        $stm = $conn->prepare("INSERT INTO billing_form (shipping_first_name, shipping_last_name, shipping_street,
        shipping_appartment, shipping_city, shipping_post_code, shipping_country, billing_first_name,
        billing_last_name, billing_street, billing_appartment, billing_city, billing_post_code,
        billing_country)

        VALUES (:shipping_first_name, :shipping_last_name, :shipping_street, :shipping_appartment,
        :shipping_city, :shipping_post_code, :shipping_country, :billing_first_name, :billing_last_name,
        :billing_street, :billing_appartment, :billing_city, :billing_post_code, :billing_country)");

        // Bind the parameters with the respective values
        $stm->bindParam(':shipping_first_name', $shippingFirstName);
        $stm->bindParam(':shipping_last_name', $shippingLastName);
        $stm->bindParam(':shipping_street', $shippingStreet);
        $stm->bindParam(':shipping_appartment', $shippingApp);
        $stm->bindParam(':shipping_city', $shippingCity);
        $stm->bindParam(':shipping_post_code', $shippingPosCode);
        $stm->bindParam(':shipping_country', $shippingCountry);
        $stm->bindParam(':billing_first_name', $billingFirstName);
        $stm->bindParam(':billing_last_name', $billingLastName);
        $stm->bindParam(':billing_street', $billingStreet);
        $stm->bindParam(':billing_appartment', $billingApp);
        $stm->bindParam(':billing_city', $billingCity);
        $stm->bindParam(':billing_post_code', $billingPosCode);
        $stm->bindParam(':billing_country', $billingCountry);

        $stm->execute();

        if ($stm->rowCount() > 0) {
            echo "Data inserted successfully!";
        } else {
            echo "Failed to insert data.";
        }

    } catch (PDOException $e) {
        echo 'Error : ' . $e->getMessage();
    }

}

function test_input($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>