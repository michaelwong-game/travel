import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

const Navbar = () => {
    const [active, setActive] = useState("navBar");

    const showNavbar = () => {
        setActive("navBar activeNavbar");
    };

    const removeNavbar = () => {
      setActive("navBar");
  };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1>
                            <MdOutlineTravelExplore className="icon" />
                            Travel.
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ui className="navList flex">
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Packages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Shop
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                About
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Pages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                News
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Contact
                            </a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ui>

                    <div onClick={removeNavbar} className="closeNavbar">
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div onClick={showNavbar} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
