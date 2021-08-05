import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div>
            <div className="contact container text-center">
                <h2>Hubungi Kami</h2>
                <div className="row">
                    <div className="col-4 px-5 pt-5 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-pin-map mb-4" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M3.1 11.2a.5.5 0 0 1 .4-.2H6a.5.5 0 0 1 0 1H3.75L1.5 15h13l-2.25-3H10a.5.5 0 0 1 0-1h2.5a.5.5 0 0 1 .4.2l3 4a.5.5 0 0 1-.4.8H.5a.5.5 0 0 1-.4-.8l3-4z"/>
                            <path fillRule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999z"/>
                        </svg>
                        <h5 className="p-0 m-0">Alamat</h5>
                        <small>Jl. Bromo III/47 RT01/RW10 Sisir, Kota Batu, Jawa Timur</small>
                    </div>
                    <div className="col-4 px-5 pt-5 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-envelope mb-4" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                        </svg>
                        <h5 className="p-0 m-0">Email</h5>
                        <small>relaktasi@gmail.com</small>
                    </div>
                    <div className="col-4 px-5 pt-5 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-telephone mb-4" viewBox="0 0 16 16">
                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>
                        <h5 className="p-0 m-0">Telepon</h5>
                        <small>082-139012215 / 081-336184160</small>
                    </div>
                    <div className="col-12 p-0 m-0 rounded">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2350.023884861701!2d112.52490151602497!3d-7.868538972213777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7880cadd7e367d%3A0x9763cbc599722e78!2sJl.%20Bromo%20Gg.%203%2C%20Sisir%2C%20Kec.%20Batu%2C%20Kota%20Batu%2C%20Jawa%20Timur%2065314!5e0!3m2!1sen!2sid!4v1628070649738!5m2!1sen!2sid"  frameBorder="0" style={{border:0}} allowFullScreen={true} aria-hidden="false" tabIndex="0" title="map"></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
