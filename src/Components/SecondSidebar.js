import React, {Component} from 'react';
import '../App.css';

class SecondSidebar extends Component {
    render() {
        return (
            <div className="SecodSidebarMain">
                <div className="SecondSidebar">
                    <ul>
                        <li className="BorderedBottomSidebar">
                            <span>AVALIABLE</span>
                            <span></span>
                        </li>
                        <li className="SeconSidebarPaddingTop"><input type="radio"/>
                            <span>In Storage</span>
                            <span>45</span>
                        </li>
                        <li><input type="radio"/>
                            <span>In OnlineShop</span>
                            <span>12</span>
                        </li>
                        <li className="BorderedBottomTopSidebar">
                            <span>BRANDS</span>
                            <span className="Blue">ALL</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>Apple</span>
                            <span>32</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>JBL</span>
                            <span>14</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>Bose</span>
                            <span>3</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>Nest</span>
                            <span>5</span>
                        </li>
                    </ul>
                </div>

            </div>

        );
    }
}

export default SecondSidebar;