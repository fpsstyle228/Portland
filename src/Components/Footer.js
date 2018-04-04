import React, {Component} from 'react';
import '../App.css';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGooglePlus from 'react-icons/lib/fa/google-plus';
import {Link} from "react-router-dom";

class Footer extends Component {
    render() {
        return (
            <div className="FooterMain">
                <div className="Footer">
                    <div className="FooterMenuCont">
                        
                        <img src="/images/portlandwhite.png" alt="portland"/>
                        <p className="FooterMenu">
												<Link to="/">HOME</Link>
												<Link to="/devices">SHOP</Link>
												<Link to="/DeliveryPayment">TEAM</Link>
												<Link to="/AboutUs">ABOUT US</Link>
												<Link to="/AboutUs">CONTACTS</Link>
                        </p>
                        <p className="FooterSocial">
                            <a href="#"><FaTwitter /></a>
                            <a href="#"><FaFacebook /></a>
                            <a href="#"><FaGooglePlus /></a>
                        </p>
                    </div>
                    <div className="FoterCont2">
                        <p className="FooterWords">
                        She gave my mother such a turn, that I have always been convinced I am indebted to Miss Betsey for having been born on a Friday.
                        </p>
                        <p className="FooterTerms">
                            <span>PRIVACY POLICY</span>
                            <span>TERMS AND CONDITIONS</span>
                        </p>
                    </div>
                </div>
            </div>
            
        );

    }
}

export default Footer;
