import React from 'react';
import './Testimony.css';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import background from '../images/b0.jpg';
import testi1 from '../images/team7.jpg';
import testi2 from '../images/team2.jpg';
import testi3 from '../images/team4.jpg';

function Testimony() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
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
            <div className="testimony text-center">
                <ParallaxProvider>
                    <ParallaxBanner
                        className="parallax"
                        layers={[
                            {
                                image: background,
                                amount: -.3,
                            }
                        ]}
                        style={{
                            height: '80vh',
                        }}
                    >
                        <div className="titleTesti p-3">
                            <h2>Testimoni</h2>
                        </div>
                        <div className="container carouselContainer">
                            <Carousel
                                swipeable={true}
                                draggable={true}
                                showDots={true}
                                responsive={responsive}
                                infinite={true}
                                autoPlay={true}
                                autoPlaySpeed={4000}
                                keyBoardControl={true}
                                customTransition="transform 300ms ease-in-out"
                                transitionDuration={500}
                                containerClass="carousel-container"
                                removeArrowOnDeviceType={["tablet", "mobile"]}
                                dotListClass="custom-dot-list-style"
                                itemClass="carousel-item-padding-40-px"
                            >
                                <div className="p-5">
                                    <img src={testi1} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                                    <div className="pt-3">
                                        <h5 className="mb-0 fw-bold">Testi1</h5>
                                        <small className="text-muted fw-bold">Ibu Rumah Tangga</small>
                                        <p className="my-2 fw-bold fst-italic">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <img src={testi2} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                                    <div className="pt-3">
                                        <h5 className="mb-0 fw-bold">Testi2</h5>
                                        <small className="text-muted fw-bold">Perawat</small>
                                        <p className="my-2 fw-bold fst-italic">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </div>
                                <div className="p-5">
                                    <img src={testi3} className="img-fluid rounded-circle shadow" alt="Konselor"/>
                                    <div className="pt-3">
                                        <h5 className="mb-0 fw-bold">Testi3</h5>
                                        <small className="text-muted fw-bold">Guru</small>
                                        <p className="my-2 fw-bold fst-italic">
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.
                                            <i className="fa fa-quote-right" aria-hidden="true"></i>
                                        </p>
                                    </div>
                                </div>
                            </Carousel>
                            
                        </div>
                    </ParallaxBanner>
                </ParallaxProvider>
            </div>
        </div>
    );
}

export default Testimony;
