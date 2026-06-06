import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, EffectFade } from 'swiper/modules';
import illustration4 from "/assets/img/illustration/4.png";
import thumb1 from "/assets/img/thumb/1.jpg";
import thumb2 from "/assets/img/thumb/2.jpg";
import { Link } from "react-router-dom";

// Make sure to import your CSS file where you'll define the new text color
import './YourComponent.css'; // Or your main CSS file

const OfferV2 = () => {
    return (
        <>
            {/* CHANGE 1: Removed "bg-dark" and changed "text-light" to "text-dark".
              CHANGE 2: Updated the background image URL to your new yellow background.
            */}
            <div className="food-offera-rea default-padding text-dark bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/2.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="offser-carousel"
                                direction={"horizontal"}
                                loop={true}
                                effect={"fade"}
                                fadeEffect={{
                                    crossFade: true
                                }}
                                speed={3000}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                modules={[Keyboard, Autoplay, EffectFade]}
                            >
                                <div className="swiper-wrapper">

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="offer-style-one">
                                            <div className="shape">
                                                <img src={illustration4} alt="Image Not Found" />
                                            </div>
                                            <div className="row align-center">
                                                <div className="col-xl-6 col-lg-5">
                                                    <div className="thumb">
                                                        <img src={thumb1} alt="Image Not Found" />
                                                        <div className="discount-badge">
                                                            <strong>Special</strong> Discount
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                                                    <div className="info">
                                                        <h2>Birthday Party</h2>
                                                        <p>
                                                            Make your next birthday unforgettable! We provide the perfect festive atmosphere, a spectacular feast, and dedicated service to make your special day truly memorable. Let us handle the details while you create lasting memories with your friends and family.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <h5>Guest allowed</h5>
                                                                <div className="line-seperator" />
                                                                <h5>60 Person</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Food Items </h5>
                                                                <div className="line-seperator" />
                                                                <h5>80+ Item</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Time Timit</h5>
                                                                <div className="line-seperator" />
                                                                <h5>4 Hours</h5>
                                                            </li>
                                                        </ul>
                                                        {/* CHANGE 3: Changed button style for better contrast.
                                                            From "btn-light" to "btn-dark".
                                                        */}
                                                        <Link className="btn circle btn-md btn-dark animation mt-10" to="/contact">Book A Table</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    {/* Single Item */}
                                    <SwiperSlide className="swiper-slide">
                                        <div className="offer-style-one">
                                            <div className="shape">
                                                <img src={illustration4} alt="Image Not Found" />
                                            </div>
                                            <div className="row align-center">
                                                <div className="col-xl-6 col-lg-5">
                                                    <div className="thumb">
                                                        <img src={thumb2} alt="Image Not Found" />
                                                        <div className="discount-badge">
                                                            <strong>Special</strong> Discount
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                                                    <div className="info">
                                                        <h2>Wedding Cremony</h2>
                                                        <p>
                                                            We welcome our younger guests! Please supervise children as they serve themselves to ensure their safety and a Taste food for all.
                                                        </p>
                                                        <ul>
                                                            <li>
                                                                <h5>Guest allowed</h5>
                                                                <div className="line-seperator" />
                                                                <h5>500 Person</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Food Items </h5>
                                                                <div className="line-seperator" />
                                                                <h5>120+ Item</h5>
                                                            </li>
                                                            <li>
                                                                <h5>Time Timit</h5>
                                                                <div className="line-seperator" />
                                                                <h5>5 Hours</h5>
                                                            </li>
                                                        </ul>
                                                        <Link className="btn circle btn-md btn-dark animation mt-10" to="/contact">Book A Table</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
};

export default OfferV2;