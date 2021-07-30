import React from 'react';
import './Team.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import team1 from '../images/team1.jpg';
import team2 from '../images/team2.jpg';
import team3 from '../images/team3.jpg';
import team4 from '../images/team4.jpg';
import team5 from '../images/team5.jpg';
import team6 from '../images/team6.jpg';
import team7 from '../images/team7.jpg';
import team8 from '../images/team8.jpg';


function Team() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3,
          slidesToSlide: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1
        }
    };

    return (
        <div>
            <div className="team container text-center">
                <h2>Tim Kami</h2>
                <Carousel
                    arrows={false}
                    swipeable={true}
                    draggable={true}
                    showDots={true}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="p-5">
                        <img src={team1} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team1</h5>
                            <small>Founder</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team2} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team2</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team3} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team3</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team4} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team4</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team5} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team5</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team6} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team6</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team7} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team7</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                    <div className="p-5">
                        <img src={team8} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                        <div className="pt-3">
                            <h5>Team8</h5>
                            <small>Konselor</small>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Team;
