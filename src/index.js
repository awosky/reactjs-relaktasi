import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Service from './component/Service';
import Team from './component/Team';
import Testimony from './component/Testimony';
import Contact from './component/Contact';
import { ScrollSpy } from "organism-react-scroll-nav";

ReactDOM.render(
  <React.StrictMode>
    <ScrollSpy id="Home">
      <Navbar />
    </ScrollSpy>
    <Home />
    <ScrollSpy id="About">
      <About />
    </ScrollSpy>
    <ScrollSpy id="Service">
      <Service />
    </ScrollSpy>
    <ScrollSpy id="Team">
      <Team />
    </ScrollSpy>
    <ScrollSpy id="Testimony">
      <Testimony />
    </ScrollSpy>
    <ScrollSpy id="Contact">
      <Contact />
    </ScrollSpy>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();
