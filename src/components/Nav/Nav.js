import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
    return (
        <div className="container-fluid shadow">
            <div className="d-flex align-items-center justify-content-between py-3 px-5">
                <div>
                    <Link to="/" style={{ textDecoration: 'none',color:'tomato' }}><h3>SHOPKORI</h3></Link>
                </div>
                <div>
                    <Link to="/cart">
                        <div className="basket">
                            <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
                            <span>4</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Nav;