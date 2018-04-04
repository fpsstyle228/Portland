import React, { Component } from 'react';
import '../App.css';
import SecondSidebar from './SecondSidebar';
import ThirdSidebar from './ThirdSidebar';
import FourthSidebar from './FourthSidebar';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

class Sidebar extends Component {

    constructor(props){
        super(props);

        this.state= {IsOpenedDropMenu1: false}
        this.state= {IsOpenedDropMenu2: false}
        this.state= {IsOpenedDropMenu3: false}
        this.state= {IsOpenedDropMenu4: false}
        this.state= {IsOpenedDropMenu5: false}
        this.state= {IsOpenedDropMenu6: false}
        this.state= {IsOpenedDropMenu7: false}
        this.state= {IsOpenedDropMenu8: false}
        this.state= {IsOpenedDropMenu9: false}
        this.state= {IsOpenedDropMenu10: false}
        ;
    }

    toggleDropMenu1(){
        this.setState({ IsOpenedDropMenu1: !this.state.IsOpenedDropMenu1});
    }
    toggleDropMenu2(){
        this.setState({ IsOpenedDropMenu2: !this.state.IsOpenedDropMenu2});
    }
    toggleDropMenu3(){
        this.setState({ IsOpenedDropMenu3: !this.state.IsOpenedDropMenu3});
    }
    toggleDropMenu4(){
        this.setState({ IsOpenedDropMenu4: !this.state.IsOpenedDropMenu4});
    }
    toggleDropMenu5(){
        this.setState({ IsOpenedDropMenu5: !this.state.IsOpenedDropMenu5});
    }
    toggleDropMenu6(){
        this.setState({ IsOpenedDropMenu6: !this.state.IsOpenedDropMenu6});
    }
    toggleDropMenu7(){
        this.setState({ IsOpenedDropMenu7: !this.state.IsOpenedDropMenu7});
    }
    toggleDropMenu8(){
        this.setState({ IsOpenedDropMenu8: !this.state.IsOpenedDropMenu8});
    }
    toggleDropMenu9(){
        this.setState({ IsOpenedDropMenu9: !this.state.IsOpenedDropMenu9});
    }
    toggleDropMenu10(){
        this.setState({ IsOpenedDropMenu10: !this.state.IsOpenedDropMenu10});
    }
    


    render() {

        let dropDownTextTopSales;
        if (this.state.IsOpenedDropMenu1){
            dropDownTextTopSales= <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextBrandFocus;
        if (this.state.IsOpenedDropMenu2){
            dropDownTextBrandFocus = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextHi_Tech;
        if (this.state.IsOpenedDropMenu3){
            dropDownTextHi_Tech = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextCellPhones;
        if (this.state.IsOpenedDropMenu4){
            dropDownTextCellPhones = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextCameras;
        if (this.state.IsOpenedDropMenu5){
            dropDownTextCameras = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextComputers;
        if (this.state.IsOpenedDropMenu6){
            dropDownTextComputers = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextTVAudio;
        if (this.state.IsOpenedDropMenu7){
            dropDownTextTVAudio = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextVideoGames;
        if (this.state.IsOpenedDropMenu8){
            dropDownTextVideoGames = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextHome;
        if (this.state.IsOpenedDropMenu9){
            dropDownTextHome = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        let dropDownTextSale;
        if (this.state.IsOpenedDropMenu10){
            dropDownTextSale = <ul className="DropMenuSidebar">
                                <li><input type="checkbox" name="" id=""/><span>Apple</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Samsung</span></li>
                                <li><input type="checkbox" name="" id=""/><span>LG</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Meizu</span></li>
                                <li><input type="checkbox" name="" id=""/><span>Xiaomi</span></li>
                                </ul>;}
        
        return(
        <div className="SidebarMain">
            <div className="Sidebar">
                <ul>
                    <li><span onClick={this.toggleDropMenu1.bind(this)}>Top Sales</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextTopSales}</li>
                    <li><span onClick={this.toggleDropMenu2.bind(this)}>Brand Focus</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextBrandFocus}</li>
                    <li><span onClick={this.toggleDropMenu3.bind(this)}>Hi-Tech</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextHi_Tech}</li>
                    <li><span onClick={this.toggleDropMenu4.bind(this)}>Cell Phones</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextCellPhones}</li>
                    <li><span onClick={this.toggleDropMenu5.bind(this)}>Cameras</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextCameras}</li>
                    <li><span onClick={this.toggleDropMenu6.bind(this)}>Computers</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextComputers}</li>
                    <li><span onClick={this.toggleDropMenu7.bind(this)}>TV.Audio</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextTVAudio}</li>
                    <li><span onClick={this.toggleDropMenu8.bind(this)}>Video Games</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextVideoGames}</li>
                    <li><span onClick={this.toggleDropMenu9.bind(this)}>Home</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextHome}</li>
                    <li><span onClick={this.toggleDropMenu10.bind(this)}>Sale</span><span className="IconDrop"><FaAngleRight /></span>
                    {dropDownTextSale}</li>    
                </ul>        
            </div>
            
            <SecondSidebar />
            <ThirdSidebar/>
            <FourthSidebar />
        </div>       
        );
    }
}

export default Sidebar;