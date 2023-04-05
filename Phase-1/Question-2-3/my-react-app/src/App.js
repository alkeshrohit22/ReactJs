import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}

            {/*links */}
            <div className={'top-menu'}>
                <div className={'row-1 col-4'}>
                    <div className={''}><a className={'menu-links'} href={'#'}>Home</a></div>
                </div>
                <div className={'row-2 col-4'}>
                    <div className={''}><a className={'menu-links'} href={'#'}>About us</a></div>
                </div>
                <div className={'row-3 col-4'}>
                    <div className={''}><a className={'menu-links'} href={'#'}>Menu</a></div>
                </div>
                <div className={'row-4 col-4'}>
                    <div className={''}><a className={'menu-links'} href={'#'}>WHERE</a></div>
                </div>
            </div>

            {/*banner image*/}
            <header className="banner-div">
                <div className="bottom-left-banner">
                    <span>Open from 6 am to 5 pm</span>
                </div>
                <div className="middle-banner">
                    <span>the <br/> cafe</span>
                </div>
                <div className={"bottom-right-banner"}>
                    <span>15 Adr street, 5015</span>
                </div>
            </header>

            {/*  About Container */}
            <div className={'about-container'}>
                <div className={'about-container-content'}>
                    <h5>ABOUT THE CAFE</h5>
                    <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <p>In addition to our full espresso and brew bar menu, we serve fresh made-to-order breakfast and
                        lunch sandwiches, as well as a selection of sides and salads and other good stuff.</p>
                </div>
                <div className={'about-container-content-2'}>
                    <div className={'content-2-quetoes'}>
                        <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh
                            is the new sweet.</i></p>
                        <p>Chef, Coffeeist and Owner: Liam Brown</p>
                    </div>
                    <div className={'content-2-image'}>
                        <img
                            src="https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                            alt="Girl in a jacket"/>
                    </div>
                    <div className={'content-2-address'}>
                        <p><strong>Opening Hours : </strong> everyday from 6am to 5pm.</p>
                        <p><strong>Address : </strong>15 Adr street, 5015, NY</p>
                    </div>
                </div>
            </div>

            {/*  Footer section */}
            <footer className={'footer'}>
                <span><strong>Created By : </strong>Alkesh Rohit</span>
                <div className={'footer-social-media'}>
                    <a href="#" className="fa fa-facebook">facebook</a>
                    <a href="#" className="fa fa-twitter">instagram</a>
                </div>
            </footer>
        </div>
    );
}

export default App;
