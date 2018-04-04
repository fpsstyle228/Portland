import React, {Component} from 'react';
import '../App.css';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right'

class ListPages extends Component {
    render() {
        return (
            <div className="ListPagesMain">
                <div className="ListPages">
                <button className="ListPagesFirst"><FaAngleLeft /></button>
                    <ul>
                        <li><span>1</span></li>
                        <li><span>2</span></li>
                        <li><span>3</span></li>
                        <li><span>4</span></li>
                        <li><span>5</span></li>
                        <li><span>6</span></li>
                        <li><span>7</span></li>
                        <li><span>8</span></li>
                    </ul>
                <button className="ListPagesLast"><FaAngleRight /></button>
                </div>

            </div>
        );

    }
}

export default ListPages;
