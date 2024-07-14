import { Link } from "react-router-dom"; 
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { useMediaQuery } from "react-responsive";

import "../../../../CSS/Navbar.css"

export function SecondRow() {
    return (
        <NavbarHook />
    )
}

function renderNavLinks() {
    const isMobile = useMediaQuery({ maxWidth: "1150px" });

    const listClassName = isMobile ? "nav__list" : "nav__list__web";
    const linkClassName = "style-2 nav__link";
    const buttonClassName = "nav__cta";

    const closeMobileMenu = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };

    return (
        <ul className="nav__link d-flex gap-4" >
            <li>
                <NavLink to="/" className={linkClassName} onClick={closeMobileMenu}>
                    Bagues de fiancailles
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/market-place"
                    className={linkClassName}
                    onClick={closeMobileMenu}
                >
                    Pierres précieuse
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/market-place"
                    className={linkClassName}
                    onClick={closeMobileMenu}
                >
                    Mariage
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/market-place"
                    className={linkClassName}
                    onClick={closeMobileMenu}
                >
                    Pierres précieuse
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/market-place"
                    className={linkClassName}
                    onClick={closeMobileMenu}
                >
                    Bijoux
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/market-place"
                    className={linkClassName}
                    onClick={closeMobileMenu}
                >
                    Collection
                </NavLink>
            </li>
        </ul>
    );
}

function NavbarHook() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: "1150px" });
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header SecondRow mt-5">
            <nav className="nav container">
                {isMobile && (
                    <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
                        <IoMenu />
                    </div>
                )}
                {isMobile ? (
                    <div
                        className={`nav__menu  ${isMenuOpen ? "show-menu" : ""}`}
                        id="nav-menu"
                    >
                        {renderNavLinks()}
                        <div className="nav__close" id="nav-close" onClick={toggleMenu}>
                            <IoClose />
                        </div>
                    </div>
                ) : (
                    renderNavLinks()
                )}
            </nav>
        </header>
    );
}