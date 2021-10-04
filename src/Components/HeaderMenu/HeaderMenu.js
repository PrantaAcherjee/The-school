import React from 'react';
import "./HeaderMenu.css"
import { Link } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        // header menuBar added 

        <div className="menubar-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-10">
                        <div className="menu-container">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/service" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>
                                <Link to="/faq" className="items">
                                    <li>FAQ</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMenu;