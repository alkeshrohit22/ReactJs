import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ContactUs from './pages/ContactUs';
import ProductPage from './pages/ProductPage';
import NoPage from './pages/NoPage';
import PaymentPage from './pages/PaymentPage'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'aboutus'} element={<AboutUs/>}/>
                    <Route path={'cartpage'} element={<CartPage/>}/>
                    <Route path={'checkoutpage'} element={<CheckoutPage/>}/>
                    <Route path={'contactus'} element={<ContactUs/>}/>
                    <Route path={'productpage'} element={<ProductPage/>}/>
                    <Route path={'paymentpage'} element={<PaymentPage/>}/>
                    <Route path={'*'} element={<NoPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
