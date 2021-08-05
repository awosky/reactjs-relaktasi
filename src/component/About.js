import React from 'react';
import './About.css';
import aboutImg from '../images/b2.jpg';
import Fade from 'react-reveal/Fade';

function About() {
  return (
    <div>
        <div className="about container text-center">
            <Fade bottom>
                <h2>Tentang Kami</h2>
            </Fade>
            <div className="row">
                <div className="col-12 order-sm-0 order-1">
                    <Fade bottom>
                        <p className="px-sm-0 px-2">
                            Relaktasi Indonesia merupakan platform digital penyedia layanan konsultasi 
                            dan terapi upaya peningkatan ASI (Re-laktasi) pada ibu yang ASI-nya sempat 
                            terhenti atau kurang oleh tenaga Kesehatan wanita terlatih yang tersebar 
                            di beberapa wilayah di Indonesia sejak tahun 2018.
                        </p>
                    </Fade>
                </div>
                <div className="col-sm-6 col-12 order-sm-1 order-0">
                    <div className="px-5 py-3">
                        <Fade left>
                            <img src={aboutImg} className="img-fluid rounded" alt="Gambar tentang kami" />
                        </Fade>
                    </div>
                </div>
                <div className="col-sm-6 col-12 text-start order-2">
                    <Fade right>
                        <div className="py-sm-3 py-0 px-sm-0 px-2">
                            <div className="row py-sm-4 py-2">
                                <div className="col-sm-2 col-12 m-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-sun" viewBox="0 0 16 16">
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                                    </svg>
                                </div>
                                <div className="col-sm-10 col-12 text-sm-start text-center m-auto">
                                    <h4 className="pt-sm-0 pt-2">Visi</h4>
                                    <p className="m-0 p-0">
                                        Menjadi pusat penyedia layanan konsultasi menyusui sahabat para bunda
                                        di seluruh Indonesia.
                                    </p>
                                </div>
                            </div>
                            <div className="row py-sm-4 py-2">
                                <div className="col-sm-2 col-12 m-auto text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-bullseye" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/>
                                        <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                                        <path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                                    </svg>
                                </div>
                                <div className="col-sm-10 col-12 text-sm-start text-center m-auto">
                                    <h4 className="pt-sm-0 pt-2">Misi</h4>
                                    <p className="m-0 p-0">
                                        Menyuarakan hak bayi untuk mendapat ASI eksklusif dan Meningkatkan 
                                        bonding dan attachment pada ibu dan bayi melalui relaktasi
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
  );
}

export default About;
