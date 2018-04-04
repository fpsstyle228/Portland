import React, {Component} from 'react';
import '../App.css';

class ThirdSidebar extends Component {
    render() {
        return (
            <div className="ThirdSidebarMain">
                <div className="ThirdSidebar">
                    <ul>
                        <li className="BorderedBottomSidebar">
                            <span>CONDITION</span>
                            <span className="Blue BlueSecond">SEE ALL</span>
                        </li>
                        <li className="SeconSidebarPaddingTop"><input type="checkbox"/>
                            <span>New</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>Manufactured Refurbished</span>
                        </li>
                        <li><input type="checkbox"/>
                            <span>Seller Refurbished</span>
                            
                        </li>
                        <li><input type="checkbox"/>
                            <span>Used</span>
                            
                        </li>
                        <li><input type="checkbox"/>
                            <span>For Parts or not Working</span>
                            
                        </li>
                    </ul>
                </div>

            </div>

        );
    }
}

export default ThirdSidebar;