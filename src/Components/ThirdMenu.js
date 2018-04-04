import React, {Component} from 'react';
import '../App.css';

class ThirdMenu extends Component {
    render() {
        return (
            <div className="ThirdMenuMain">
                <div className="ThirdMenu">
                    <ul>
                        <li>
                            <div className="ThirdMenu-WhiteBox-1">
                                <span>SORT BY</span>
                                <select name="" id="">
                                    <option value="best-match">BEST MATCH</option>
                                    <option value="popularity">POPULARITY</option>
                                    <option value="first-cheap">FIRST CHEAP</option>
                                    <option value="first-expensive">FIRT EXPENSIVE</option>
                                </select>
                            </div>
                        </li>
                        <li>
                            <div className="ThirdMenu-WhiteBox-2">
                                <span>KEYWORDS</span><input type="text" placeholder="Tablet" className="Tablet"/>
                                <span>PRICE</span><input type="text" className="Price"/>
                                <span className="Price-">-</span><input type="text" className="Price"/>
                                <input type="checkbox" name="" id="" className="Checbox-ThirdMenu"/>
                                <span>Free Shipping</span>

                            </div>
                        </li>
                        <li>
                            <div className="ThirdMenu-WhiteBox-3">
                                <span>SHIP TO</span>
                                <select name="" id="">
                                    <option value="usa">USA</option>
                                    <option value="ukr">UKRAINE</option>
                                    <option value="pomoika">POMOIKA</option>
                                </select>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default ThirdMenu;