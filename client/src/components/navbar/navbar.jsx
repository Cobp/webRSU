import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./navbarModule.css";

const Navbar = () => {
    const [clickedLink, setClickedLink] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const Links = [ 
        {
            name: "Inicio",
            link: "/"
        },
        {
            name: "Horas",
            link: "/Reg-horas-rsu"
        },
        {
            name: "P. Disponibles",
            link: "/proyectos-rsu"
        },
        {
            name: "Contáctenos",
            link: "https://ueb.edu.bo/contactenos/"
        },
        // {
        //     name: "Administ",
        //     link: "/mode-administ"
        // },
        {
            name: "Regístrate",
            link: "/login"
        }
    ];

    const handleClick = (index) => {
        setClickedLink(index);
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header>
            <nav className="navbar-container">
                <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <a href="https://ueb.edu.bo/" title="Universidad Evangélica Boliviana">
                    <img src="https://ueb.edu.bo/wp-content/uploads/2023/04/logo2-ueb-transparente.png" alt="" />
                </a>
                <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
                    {Links.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.link}
                                className={clickedLink === index ? 'clicked-link' : ''}
                                onClick={() => handleClick(index)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
