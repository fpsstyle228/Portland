import React, { Component } from 'react';
import '../App.css';
import Goods from './Goods';
import BigGoods from './BigGoods';

class Good extends Component {
    render() {
        return(
               
        
            <div className="GoodWrapper"><Goods /><Goods /><Goods /><Goods />
            <BigGoods /><Goods /><Goods /><Goods /><Goods /><Goods /><Goods />
            </div>
        );
    }
}

export default Good;