import React from "react";
import icon from '../assets/svg/logooo.svg';
import '../scss/header.scss';
import data from '../assets/json/index.json'

const Header = () => {
    return(
        <header id="header">
            <div id="header-ident">
                <img src={icon} id="ident-image" alt={data.brand_img}></img>
            </div>
            <div id="header-refs">
                <ul id="refs-elements">
                    <a href=""><li>Contacto</li></a>
                </ul>
            </div>
        </header>
    )
}
export default Header;