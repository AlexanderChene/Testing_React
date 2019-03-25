import React from "react";
import "./styles.scss";
import Logo from './../../../src/assets/graphics/logo.png'
const Header = (props) => {
    return (
        <header>
            <div className="wrap">
                <div className="logo">
                    <img src = {Logo} alt="dragon"/>
                </div>
            </div>
        </header>
    )
}

export default Header;