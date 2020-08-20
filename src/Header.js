import React from 'react';
import logo from "./images/logo1.jpg";
import './Header.css';




class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <img src={logo} className ="logo"/>
        <div className = "header_box">about us</div>
        <div className = "header_box">history</div>
        <div className = "header_box">introduction</div>
        <div className = "header_box">contact</div>
        <div className = "header_box">private</div>
       
      </div>
    );
  }
}

export default Header;



