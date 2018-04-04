import React, {Component} from 'react';
import '../App.css';
import FaAlignJustify from 'react-icons/lib/fa/align-justify';
import FaShoppingCart from 'react-icons/lib/fa/shopping-cart';
import FaSearch from 'react-icons/lib/fa/search';
import Slider from "./Slider";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <div>
                <div className="HeaderMain">
                    <div className="DropMenu">
                        <ul className="MenuButtons" id="TopNav">
                            <li className="MenuHeader"><FaAlignJustify/></li>
                            <li className="Visible"><img src="/images/portland.jpg" alt="portlandlogo"/></li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/devices">Devices</Link>
                            </li>
                            <li>
                                <Link to="/DeliveryPayment">Delivery & Payment</Link>
                            </li>
                            <li>
                                <Link to="/Guarantee">Guarantee</Link>
                            </li>
                            <li>
                                <Link to="/AboutUs">About Us</Link>
                            </li>
                            <li className="Visible">
                                <div className="CartMain">
                                    < FaShoppingCart/>
                                    <span>Cart</span>
                                    <div className="Cart-container">
                                        <span className="Cart-span"></span>
                                        <span className="Cart-text">0</span>
                                    </div>
                                </div>
                            </li>
                            <li className="Visible">
                                <button className="HeaderBtn">Sign in</button>
                            </li>
                        </ul>

                    </div>
                    <hr/>
                    <div className="SecondMenuMain">
                        <ul className="SecondMenu">
                            <li>
                                <a href="#">TOP SALES</a>
                            </li>
                            <li>
                                <a href="#">BRAND FOCUS</a>
                            </li>
                            <li>
                                <a href="#">HI-TECH</a>
                            </li>
                            <li>
                                <a href="#">BEST SELLERS</a>
                            </li>
                            <li>
                                <a href="#">PROJECTS</a>
                            </li>
                            <li>
                                <a href="#" className="Support">SUPPORT</a>
                            </li>
                            <li className="Bordered">
                                <div><FaSearch className="Search"/><input placeholder="I`m looking for..."/></div>
                            </li>
                        </ul>
                    </div>
                    <div></div>
                    {/* <Slider/> */}
                </div>
            </div>
        );

    }
}

export default Header;
