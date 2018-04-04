import React, { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import ThirdMenu from "./Components/ThirdMenu";
import Sidebar from "./Components/Sidebar";
import Good from './Components/Good';
import ListPages from './Components/ListPages';
import BestSellers from './Components/BestSellers';
import Customers from './Components/Customers';
import Footer from './Components/Footer';
import Slider from "./Components/Slider";
import {Col} from 'reactstrap';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
			<Slider/>
      <ThirdMenu />

      <div className="Flex-container">
          <Sidebar />
          <Good />
      </div>
      <ListPages />
      <BestSellers />
      <Customers />
      <Footer />
      </div>
    );
  }
}

export default App;
