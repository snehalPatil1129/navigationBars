import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";
import nav from "./_nav";
import {Nav,NavDropdown} from "react-bootstrap";
class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle("open");
  }

  hideMobile() {
    if (document.body.classList.contains("sidebar-mobile-show")) {
      document.body.classList.toggle("sidebar-mobile-show");
    }
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
        <Nav.Item key={key} className={classes.item}>
            <Nav.Link
              to={url}
              className={classes.link}
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
        // <NavDropdown title={item.name}>
        //     {item.children.length > 0 ? navList(item.children) : <NavDropdown.Item>{item.name}</NavDropdown.Item>}
        // </NavDropdown>
        <li className="nav-item nav-dropdown" key={key}>
          <a
            className="nav-link nav-dropdown-toggle"
            href="/"
            onClick={this.handleClick}
          >
            <i className={item.icon} />
            {item.name}
          </a>
          <ul className="nav-dropdown-items">{navList(item.children)}</ul>
        </li>
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

    // sidebar-nav root
    return (
      <div className="sidebar sidebar-fixed ">
        <nav className="sidebar-nav sidebar sidebar-fixed">
          <Nav variant="tabs" className="flex-column nav">{navList(nav.items)}</Nav>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
