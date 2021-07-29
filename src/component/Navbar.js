import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../images/logo.png';
import { SmoothScrollLink } from "organism-react-scroll-nav";

function Navbar() {
    const [Top, setTop] = useState(true);

    useEffect(() => {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 10;
            if (isTop !== Top) {
            setTop(isTop);
            isTop 
            ? document.getElementById('navbar').classList.remove("scrolled")
            : document.getElementById('navbar').classList.add("scrolled");
            }
        });
    });

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparant fixed-top px-3" id="navbar">
                <a className="navbar-brand" href="https://relaktasi.com/"><img src={logo} className="img-fluid" alt="logo" id="logo"/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto text-center">
                        <li className="nav-item">
                            <SmoothScrollLink targetId="Home" > Beranda </SmoothScrollLink>
                        </li>
                        <li className="nav-item">
                            <SmoothScrollLink targetId="About" > Tentang </SmoothScrollLink>
                        </li>
                        <li className="nav-item">
                            <SmoothScrollLink targetId="Portofolio"> Layanan </SmoothScrollLink>
                        </li>
                        <li className="nav-item">
                            <SmoothScrollLink targetId="Testimony"> Konselor </SmoothScrollLink>
                        </li>
                        <li className="nav-item">
                            <SmoothScrollLink targetId="Contact" className="rounded-pill"> Hubungi Kami </SmoothScrollLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
