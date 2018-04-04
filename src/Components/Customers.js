import React, {Component} from 'react';
import '../App.css';

class Customers extends Component {
    render() {
        return (
                <div className="CustomersMain">
                    <div className="Customers">
                        <p>What Our Customers Have to Say</p>
                        <p className="Italic">Couple of Words About This Stories Section</p>
                        
                      <div className="CustomersContainer">
                            <ul>
                                <li>
                                    <img src="/images/eblo.png" alt="eblo"/>
                                    <p>
                                        <span className="CustomersName">Celisa Fields</span><br/>
                                        <span className="CustomersJob">UX Expert</span>
                                    </p>
                                    <p className="CustomersText">This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.</p>
    
                                </li>
                                <li>
                                    <img src="/images/eblo.png" alt="eblo"/>
                                    <p>
                                        <span className="CustomersName">Celisa Fields</span><br/>
                                        <span className="CustomersJob">UX Expert</span>
                                    </p>
                                    <p className="CustomersText">This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.</p>
    
                                </li>
                                <li>
                                    <img src="/images/eblo.png" alt="eblo"/>
                                    <p>
                                        <span className="CustomersName">Celisa Fields</span><br/>
                                        <span className="CustomersJob">UX Expert</span>
                                    </p>
                                    <p className="CustomersText">This I have produced as a scantling of Jack’s great eloquence and the force of his reasoning upon such abstruse matters.</p>
    
                                </li>
                            </ul>
                      </div>

                    </div>
                 </div>
        )

    }
}

export default Customers;
