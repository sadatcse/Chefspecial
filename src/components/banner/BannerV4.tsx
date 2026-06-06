import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import illustration3 from "/assets/img/illustration/rice.png"
import pizza from "/assets/img/illustration/pizza.png"
import { Link } from "react-router-dom";
import Shawarma from "/assets/img/illustration/Shawarma.png"

const BannerV4 = () => {
    return (
        <>
            <div className="banner-area banner-style-four navigation-circle overflow-hidden bg-theme text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/1.jpg)' }}>
                <Swiper
                    direction={"horizontal"}
                    loop={true}
                    speed={3000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    effect={"fade"}
                    fadeEffect={{
                        crossFade: true
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        type: 'bullets',
                        clickable: true,
                    }}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev"
                    }}
                    className="banner-fade"
                    modules={[Keyboard, Autoplay, Pagination, Navigation, EffectFade]}
                >
                    <div className="swiper-wrapper">

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>Purchase today. just  <strong>৳280</strong></h4>
                                            <h2>Classic Egg Fried Rice</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn circle btn-banner btn-md animation border-2" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={illustration3} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Single Item */}
                        <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>Purchase today. just  <strong>৳330</strong></h4>
                                            <h2>Special Offer Chicken Shawarma</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn circle btn-banner btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={Shawarma} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                                                <SwiperSlide className="swiper-slide">
                            <div className="container">
                                <div className="content">
                                    <div className="row align-center">
                                        <div className="col-lg-6">
                                            <h4>Purchase today. just  <strong>৳415</strong></h4>
                                            <h2>Delicious BBQ Chicken Gourmet Pizza</h2>
                                            <p>
                                                Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing know.
                                            </p>
                                            <div className="button mt-40">
                                                <Link className="btn circle btn-banner btn-md animation" to="/shop">Order Now</Link>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="thumb">
                                                <img src={pizza} alt="Image Not Found" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    </div>
                    {/* Navigation */}
                    <div className="swiper-nav-left">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                </Swiper>
            </div>
        </>
    );
};

export default BannerV4;