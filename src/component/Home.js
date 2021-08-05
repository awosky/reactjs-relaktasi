import React from 'react';
import './Home.css';
import { SmoothScrollLink } from "organism-react-scroll-nav";
import Zoom from 'react-reveal/Zoom';

function Home() {
  return (
    <div>
        <div className="home jumbotron jumbotron-fluid">
            <div className="container">
              <Zoom>
                <h1>Relaktasi Indonesia</h1>
                <p>Sahabat pejuang ASI Indonesia</p>
                <SmoothScrollLink targetId="About" ><div className="scroll"></div></SmoothScrollLink>
              </Zoom>
            </div>
        </div>
    </div>
  );
}

export default Home;
