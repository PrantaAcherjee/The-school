import React from 'react';
import "./Header.css"
import HeaderMenu from '../HeaderMenu/HeaderMenu';

const Header = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <HeaderMenu></HeaderMenu>
                    <div className="col-md-6">
                        <h1 className="title">
                            We Help You To Make <br />Your  Bright Future
                        </h1>
                        <p className="text-white text-center mt-3">
                            we are committed to give you best service for your education. Get admit in the "The Light school" will be your best decission to make you more brighter.
                        </p>
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Header;