import React, { Component } from 'react';
import '../App.css';


class Goods extends Component {
    render() {
        return(
        <div className="GoodsMain">
            <div className="Goods">
            <img src="/images/photo.png" alt="appletv"/><br/>
            <div className="TextAlign">
            <span className="NameOfGood">AppleTv 32GB</span><br/>
            <span className="StyleOfGood">black</span><br/>
            <span className="PriceOfGood">$49.99</span>
            </div>
            </div>

        </div>
            
        );
    }
}

export default Goods;