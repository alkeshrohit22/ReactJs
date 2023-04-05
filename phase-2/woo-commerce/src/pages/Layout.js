import {Outlet, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/Layout.css';
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <nav className={'navbar navbar-expand-lg navbar-light my-nav'}>
                <div className={'collapse navbar-collapse'} id={'navbarSupportedContent'}>
                    <ul className={'navbar-nav my-ul'}>
                        <li className={'nav-item active my-list'}>
                            <Link to="/" className={'nav-link'}>Home</Link>
                        </li>
                        <li className={'nav-item my-list'}>
                            <Link to="/productpage" className={'nav-link'}>Product</Link>
                        </li>
                        <li className={'nav-item my-list'}>
                            <Link to="/cartpage" className={'nav-link'}>Cart</Link>
                        </li>
                        <li className={'nav-item my-list'}>
                            <Link to="/checkoutpage" className={'nav-link'}>Checkout</Link>
                        </li>
                        <li className={'nav-item my-list'}>
                            <Link to="/aboutus" className={'nav-link'}>About Us</Link>
                        </li>
                        <li className={'nav-item my-list'}>
                            <Link to="/contactus" className={'nav-link'}>Contact Us</Link>
                        </li>
                    </ul>
                    <form className="my-form my-2 my-lg-0">
                        <input className="mr-sm-2 me-2 form-input" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0 form-button" type="submit">Search
                        </button>
                    </form>
                </div>
            </nav>

            <Outlet/>

            <Footer/>
        </>

    )
};

export default Layout;