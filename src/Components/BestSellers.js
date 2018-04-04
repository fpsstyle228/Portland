import React, {Component} from 'react';
import '../App.css';


class BestSellers extends Component {
    render() {
        return (
           <div className="BestSellersMain">
                <div className="BestSellers">
                    <p>BEST SELLERS</p>
                    <ul>
                        <li>
                            <img src="/images/shapka.png" alt="shapka"/>
                            <p className="BestSellersName">Beanie</p>
                            <p className="BestSellersStyle">GREEN</p>
                            <p className="BestSellerPrice"><span className="BestSellersPriceDis">$39.99</span><span className="BestSellersPriceEne">$29.99</span></p>
                        </li>
                        <li>
                            <img src="/images/shapka.png" alt="shapka"/>
                            <p className="BestSellersName">Beanie</p>
                            <p className="BestSellersStyle">GREEN</p>
                            <p className="BestSellerPrice"><span className="BestSellersPriceDis">$39.99</span><span className="BestSellersPriceEne">$29.99</span></p>
                        </li>
                        <li>
                            <img src="/images/shapka.png" alt="shapka"/>
                            <p className="BestSellersName">Beanie</p>
                            <p className="BestSellersStyle">GREEN</p>
                            <p className="BestSellerPrice"><span className="BestSellersPriceDis">$39.99</span><span className="BestSellersPriceEne">$29.99</span></p>
                        </li>
                        <li>
                            <img src="/images/shapka.png" alt="shapka"/>
                            <p className="BestSellersName">Beanie</p>
                            <p className="BestSellersStyle">GREEN</p>
                            <p className="BestSellerPrice"><span className="BestSellersPriceDis">$39.99</span><span className="BestSellersPriceEne">$29.99</span></p>
                        </li>
                        
                    </ul>
                </div>
           </div> 
        );

    }
}

export default BestSellers;
