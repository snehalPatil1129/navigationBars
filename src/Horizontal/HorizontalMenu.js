import React, { Component } from 'react'
import {Nav, NavDropdown,Navbar} from "react-bootstrap";
import nav from "../Sidebar/_nav";
import classNames from "classnames";

export default class HorizontalMenu extends Component {
    onToggle =() => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    render() {
         // nav item with nav link
    const navItem = (item, key) => {
        const classes = {
          item: classNames(item.class),
          link: classNames(
            "nav-link",
            item.variant ? `nav-link-${item.variant}` : ""
          ),
          icon: classNames(item.icon)
        };
        return navLink(item, key, classes);
      };
  
      // nav link
      const navLink = (item, key, classes) => {
        const url = item.url ? item.url : "";
        return (
          <Nav.Item key={key} >
              <Nav.Link
                to={url}
            
                onClick={this.hideMobile}
              >
                <i className={classes.icon} />
                {item.name}
              </Nav.Link>
          </Nav.Item>
        );
      };
  
      // nav dropdown
      const navDropdown = (item, key) => {
        return (
            <NavDropdown.Item key={key}>
                <a
              href="/"
              onClick={this.handleClick}
            >
              <i className={item.icon} />
              {item.name}
            </a>
            <NavDropdown drop="right">{navList(item.children)}</NavDropdown>
            </NavDropdown.Item>

        //   <li className="nav-item nav-dropdown" key={key}>
        //     <a
        //       className="nav-link nav-dropdown-toggle"
        //       href="/"
        //       onClick={this.handleClick}
        //     >
        //       <i className={item.icon} />
        //       {item.name}
        //     </a>
        //     <ul className="nav-dropdown-items">{navList(item.children)}</ul>
        //   </li>
        );
      };
  
      // nav type
      const navType = (item, idx) =>
           item.children
                ? navDropdown(item, idx)
                : navItem(item, idx);
  
      // nav list
      const navList = items => {
        return items.map((item, index) => navType(item, index));
      };
  

        return (
            // <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
            //     <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
            // </Navbar>
            <nav id="menu">
  <label for="tm" id="toggle-menu">Navigation <span class="drop-icon">▾</span></label>
  <input type="checkbox" id="tm"/>
  <ul class="main-menu clearfix">
    <li><a href="/">Sample</a></li>
    <li><a href="/">2-level DD 
        <span class="drop-icon">▾</span>
        <label title="Toggle Drop-down" class="drop-icon" for="sm1">▾</label>
      </a>
      {/* <input type="checkbox" id="sm1"/> */}
      <ul class="sub-menu">
        <li><a href="/">Item 2.1</a></li>
        <li><a href="/">Item 2.2
            <span class="drop-icon">▾</span>
            <label title="Toggle Drop-down" class="drop-icon" for="sm2">▾</label>
          </a>
          <input type="checkbox" id="sm2"/>
          <ul class="sub-menu">
            <li><a href="/">Item 2.2.1</a></li>
            <li><a href="/">Item 2.2.2</a></li>
            <li><a href="/">Item 2.2.3</a></li>
          </ul>
        </li>
        <li><a href="/">Item 3.4</a></li>
      </ul>
    </li>
    <li><a href="/">Another Sample</a></li>
  </ul>
</nav>
        )
    }
}
