import React, { Component } from 'react';
import './Header.scss';

const items = ['Men', 'Women', 'Kids', 'Baby', 'sale'];

class Header extends Component {

    generateLinks = () => {
        return items.map((item) => (<td className="header-category">{item}</td>));
    }

    render() {
        const logo = "http://i65.tinypic.com/21bm32b.png";

        return (
            <div className="header-container">
                <table className="header-container-grey">
                    <th className="header-item">Free shipping from €20.-* </th>
                    <th className="header-item">Order before 23:00, receive tomorrow*</th>
                    <th className="header-item">Free return</th>

                    <th className="header-user-item">
                        Log In
                        <span className="icon icon-arrow-down"></span>
                    </th>
                    <span className="header-separator"></span>
                    <th className="header-user-item">Wehkamp.nl</th>
                    <span className="icon icon-arrow-down"></span>
                    <th className="header-user-item">Customer service</th>
                </table>
                <div className="header-container-white">
                    <div className="header-logo"><span className="icon icon-burger"></span> <img src={logo} /></div>
                    <a className="header-nav-link" id="link">Shop</a>
                    <a className="header-nav-link">Premium</a>
                    <a className="header-nav-link">Magazine</a>
                    <a className="header-nav-link">Merken</a>

                    <div className="header-search-input icon icon-search">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
                <table className="header-container-transparent">
                    <tr>{this.generateLinks()}</tr>
                </table>
            </div>
        );
    }
}

export default Header;