import React, {Component} from 'react';
import '../App.css';

class FourthSidebar extends Component {
    render() {
        return (
           <div className="FourthSidebarMain">
                <div className="FourthSidebar">
                    <ul>
                        <li className="BorderedBottomSidebar MB0"><span>Delivery Options</span></li>
                        <li>
                            <div className="DeliveryOpt">
                                <div className="DW50L">
                                    <input type="radio"/><span>FREE</span>
                                </div>
                                <div className="DW50R">
                                    <input type="radio"/><span>$4.99</span>
                                </div>

                            </div>
                        </li>
                    </ul>

                </div>
           </div>

        );
    }
}

export default FourthSidebar;