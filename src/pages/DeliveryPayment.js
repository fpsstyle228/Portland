import React, { Component } from 'react';
import '../App.css';
import Header from "../Components/Header";
import ThirdMenu from "../Components/ThirdMenu";
import Sidebar from "../Components/Sidebar";
import Good from '../Components/Good';
import ListPages from '../Components/ListPages';
import Footer from '../Components/Footer';
import DeliveryPaymentText from '../Components/DeliveryPaymentText';

class DeliveryPayment extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <ThirdMenu />
			<DeliveryPaymentText />
      <Footer />
      </div>
    );
  }
}

export default DeliveryPayment;
