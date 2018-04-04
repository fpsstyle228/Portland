import React, { Component } from 'react';
import '../App.css';
import Header from "../Components/Header";
import ThirdMenu from "../Components/ThirdMenu";
import Sidebar from "../Components/Sidebar";
import Good from '../Components/Good';
import ListPages from '../Components/ListPages';
import Footer from '../Components/Footer';
import GuaranteeText from '../Components/GuaranteeText';

class Guarantee extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <ThirdMenu />
			<GuaranteeText />
      <Footer />
      </div>
    );
  }
}

export default Guarantee;
