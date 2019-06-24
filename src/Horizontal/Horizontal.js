/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import {Nav, NavDropdown,Navbar} from "react-bootstrap";
import nav from "../Sidebar/_nav";
import classNames from "classnames";

export default class Horizontal extends Component {
    

    render() {

            // nav list
            const navList = items => {
                return items.map((item, index) => navType(item, index));
            };
            // nav type
            const navType = (item, idx) =>
                item.children ?
                navDropdown(item, idx) :
                navItem(item, idx);

            const navDropdown = (item,idx) => {
                return (
                    <li key={idx}>
                        <a href="/">{item.name}
                            <span className="drop-icon">▾</span>
                            <label title="Toggle Drop-down" className="drop-icon" htmlFor="sm1">▾</label>
                        </a>
                        <input type="checkbox" id="sm1"/>
                        <ul className="sub-menu">
                            {navList(item.children)}
                        </ul>
                    </li>
                )
            }

            const navItem = (item, idx) => {
                return (
                    <li key={idx}><a href="/">{item.name}</a></li>
                )
            }
            return (
            <nav id="menu">
                <label htmlFor="tm" id="toggle-menu">Navigation <span className="drop-icon">▾</span></label>
                <input type="checkbox" id="tm"/>
                <ul className="main-menu clearfix">
                    <li style={{padding: "1em 1.5em"}}>BrandName</li>
                    {navList(nav.items)}
                </ul>
            </nav>
        )
    }
}
