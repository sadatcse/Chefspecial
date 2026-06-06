"use client"
import icon2 from "/assets/img/icon/2.png"
import thumb4 from "/assets/img/thumb/4.jpg"
import { Link } from "react-router-dom";
import { useState } from "react";
import CountUp from "react-countup";
import ModalVideo from "react-modal-video";

const WhyChooseV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <div className="choose-us-style-one-area default-padding-bottom bg-gray">
                <div className="container">
                    <div className="choose-us-style-one-items">
                        <div className="row align-center">
                            <div className="col-xl-6 choose-us-style-one-info">
                                <h4 className="sub-heading">Why Choose Us</h4>
                                <h2 className="title">Enjoy your favorite food to the fullest</h2>
                                <p>
                                    The first restaurant proprietor is believed to have been one A. Boulanger, a soup vendor, who opened his business in Paris in 1765. The sign above his door advertised restoratives, or restaurants, referring to the soups and broths available within.
                                </p>
                                <ul className="list-style-one">
                                    <li>The food is amazing</li>
                                    <li>The atmosphere is perfect</li>
                                    <li>We offer something unique</li>
                                </ul>
                                <Link className="btn btn-dark btn-md animation mt-30" to="/food-menu">Book A Table</Link>
                            </div>
                            <div className="col-xl-6 bg-dark text-light choose-us-style-one-content">
                                <div className="choose-us-style-one-item">
                                    <div className="fun-fact-style-one text-center">
                                        <div className="icon">
                                            <img src={icon2} alt="Image Not Found" />
                                        </div>
                                        <div className="counter">
                                            <div className="timer"><CountUp end={500} enableScrollSpy /></div>
                                            <div className="operator">+</div>
                                        </div>
                                        <span className="medium">Menu and Dishes</span>
                                    </div>
                                </div>
                                <div className="choose-us-style-one-item">
                                    <div className="thumb">
                                        <img src={thumb4} alt="Image Not Found" />
                                        <Link to="#" className="popup-youtube video-play-button"
                                            onClick={() => setOpen(true)}>
                                            <i className="fas fa-play" />
                                            <div className="effect" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="NX7koN9Y2Ys" onClose={() => setOpen(false)} />
        </>
    );
};

export default WhyChooseV1;