import styleNavbar from './CssComponen/Navbar.module.css'
import { Link } from 'react-router-dom';

import React, { useState } from "react";
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";

const NavBarPrimary = () => {
  const [navbar, setNavbar] = useState(false)

  const changeBackGround = () => {
    if (window.scrollY >= 650) {
      setNavbar(false)
    }
    else {
      setNavbar(true)
    }
  }

  window.addEventListener('scroll', changeBackGround)

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <Navbar
          // color="transparent"
          expand="md"
          fixed="top"
          light
          // className={`${navbar}? ${styleNavbar.navbarNotActive} : ${styleNavbar.navbarActive}`}
          className={` ${styleNavbar.paddingNav} : ${styleNavbar.marginNav}  
          ${navbar ? `${styleNavbar.navbarNotActive}` : `${styleNavbar.navbarActive}`}`}
        // style={{ position: "absolute" }}
        >
          {/* <NavbarBrand className={styleNavbar.iconNavBar} href="/"> reactstrap</NavbarBrand> */}
          <NavbarToggler
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/">
                    Home
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/addrecipe">
                    Add Recipe
                  </Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink >
                  <Link className={styleNavbar.navLinkColor} to="/profile">
                    Profile
                  </Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Nav navbar>
              <div><i className={`fa fa-user ${styleNavbar.fontAwesomeLogin}`} ></i></div>
              <NavLink href="/login">
                <Link className={styleNavbar.navLinkColorLogin} to="/login" >
                  Login
                </Link>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default NavBarPrimary;