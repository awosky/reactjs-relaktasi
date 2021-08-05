import React from 'react';
import './Footer.css';
import logo from '../images/logo.png';
import { SmoothScrollLink } from "organism-react-scroll-nav";

function Footer() {
    return (
        <div>
            <div className="footer text-center shadow">
                <div className="row m-0 px-5">
                    <div className="col-sm-3 col-12 p-1">
                        <img src={logo} className="img-fluid mt-1" alt="logo"/>
                        <div className="footerContact p-2">
                            <p className="m-0 pb-2">Jl. Bromo III/47 RT01/RW10 Sisir, Kota Batu, Jawa Timur</p>
                            <p className="m-0"><strong>Email</strong> : relaktasi@gmail.com</p>
                            <p className="m-0"><strong>Telepon</strong> : 082-139012215 / 081-336184160</p>
                        </div>
                    </div>
                    <div className="col-sm-3 col-12 m-auto text-start">
                        <h4 className="text-sm-start text-center">Navigasi</h4>
                        <ul>
                            <li><SmoothScrollLink targetId="Home"><i className="fa fa-chevron-right" aria-hidden="true"></i> Beranda </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="About"><i className="fa fa-chevron-right" aria-hidden="true"></i> Tentang </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Layanan </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Team"><i className="fa fa-chevron-right" aria-hidden="true"></i> Konselor </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Testimony"><i className="fa fa-chevron-right" aria-hidden="true"></i> Testimoni </SmoothScrollLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-12 m-auto text-start">
                        <h4 className="text-sm-start text-center">Layanan</h4>
                        <ul>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Konsultasi </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Terapi </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Pelatihan </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Campaign </SmoothScrollLink></li>
                            <li><SmoothScrollLink targetId="Service"><i className="fa fa-chevron-right" aria-hidden="true"></i> Edukasi </SmoothScrollLink></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 col-12 m-auto text-start">
                        <h4 className="text-sm-start text-center">Media Sosial</h4>
                        <ul>
                            <li><a href="/"><i className="fa fa-facebook-square" aria-hidden="true"></i>&emsp;Facebook</a></li>
                            <li><a href="/"><i className="fa fa-instagram" aria-hidden="true"></i>&emsp;Instagram</a></li>
                            <li><a href="/"><i className="fa fa-linkedin-square" aria-hidden="true"></i>&emsp;LinkedIn</a></li>
                            <li><a href="/"><i className="fa fa-twitter-square" aria-hidden="true"></i>&emsp;Twitter</a></li>
                            <li><a href="/"><i className="fa fa-whatsapp" aria-hidden="true"></i>&emsp;Whatsapp</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footerCopyright text-center p-1 m-0">
                    <small>© 2021 Relaktasi Indonesia | All Right Reversed</small>
                </div>
            </div>
        </div>
    );
}

export default Footer;
