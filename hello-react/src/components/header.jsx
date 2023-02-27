import React from "react";
import logoih from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";


class Header extends React.Component {
    //las props se encuentran en el objeto this.props porqué es un CLASS COMPONENT
    render() {
        return (
        <header className="App-header">
          <img src={logoih} className="App-logoih" alt="logo" />
          <img src={menu} className="align-self-md-end justify-content-end" alt="menu" />
        </header>
        );
    }
}

export default Header;