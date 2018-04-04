import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import Devices from './pages/devices';
import DeliveryPayment from './pages/DeliveryPayment';
import Guarantee from './pages/Guarantee';
import AboutUs from './pages/AboutUs';

ReactDOM.render(
	<BrowserRouter>
	<div>
	 <Route exact path="/" component={App} />
	 <Route exact path="/devices" component={Devices} />
	 <Route exact path="/DeliveryPayment" component={DeliveryPayment} />
	 <Route exact path="/Guarantee" component={Guarantee} />
	 <Route exact path="/AboutUs" component={AboutUs} />
	</div>
 </BrowserRouter>,
	 document.getElementById('root'));
registerServiceWorker();
